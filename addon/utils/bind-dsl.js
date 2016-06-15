import A from './asserts'
import Ember from 'ember'
export default {
  init (navigation) {
    let argify = function () {
      let r = {}
      let args = [].slice.call(arguments)
      args.forEach(e => r[typeof e] = e)
      return r
    }
    let proto = Ember.RouterDSL.prototype
    let obj = {}

    /**
     * Initializes the nav
     */
    proto.nav = function () {
      let args = argify(...arguments)
      let self = this
      ;(function (name, config = {}, callback = function () {}) {
        self.modal('nav-modal', {
          withParams: 'activeCategory',
          dialogClass: 'frost-navigation-modal',
          dismissWithOutsideClick: false,
          controller: name
        })
        if(config.categories)
          config.categories.forEach(function (e) {
            navigation._registerCategory(e)
          })
        callback.call(self, {
          category: obj.category.bind({
            parent: 'nav',
            name,
            config,
            context: self,
            DSL: self
          })
        })
      })(args.string, args.object, args.function)
    }
    /**
     * Creates a menu item on the navigation bar.
     */
    obj.category = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.category, self.parent === 'nav')
      ;(function (name, config = {}, callback = function () {}) {
        navigation._registerCategory({
          name,
          columns: config.columns
        }).then(function (category) {
          callback.call(self, {
            column: obj.column.bind({
              parent: 'category',
              name,
              config,
              element: category,
              context: self,
              DSL: self.DSL
            })
          })
        })
      })(args.string, args.object, args.function)
    }
    /**
     * Creates a column that performs under the context of a navigation bar.
     */
    obj.column   = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.column, self.parent === 'category')
      ;(function (name, config = {}, callback = function () {}) {
        if (self.element) {
          let c
          self.element.columns.push(c = [
            {
              title: name,
              color: config.color || 'cyan',
              routes: config.routes || [],
              actions: config.actions || []
            }
          ])
          let o = {
            parent: 'column',
            name,
            config,
            element: c,
            context: self,
            DSL: self.DSL
          }

          callback.call(self, {
            section: obj.section.bind(o),
            app: obj.app.bind(o),
            action: obj.action.bind(o)
          })
        } else {
          Ember.assert('Problem in the pipeline')
        }

      })(args.string, args.object, args.function)
    }

    /**
     * Creates a section under a given column
     */
    obj.section  = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.section, self.parent === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        let c
        self.element.push(c = {
          title: name,
          color: config.color || 'cyan',
          routes: config.routes || [],
          actions: config.actions || []
        })
        let o = {
          parent: 'section',
          name,
          config,
          element: c,
          context: self,
          DSL: self.DSL
        }
        callback.call(self, {
          app: obj.app.bind(o),
          action: obj.action.bind(o)
        })
      })(args.string, args.object, args.function)

    }
    /**
     * Creates a routable interface, either of type
     * engine or route.
     */
    obj.app = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.app, self.parent === 'section' || self.parent === 'column')
      ;(function (name, config = {type:'route'}, callback = function () {}) {
        self.DSL[config.type === 'engine' ? 'mount' : 'route'](name, config)
        let e = self.parent === 'section' ? self.element.routes : self.element[0].routes
        e.push({
          name,
          description: config.description,
          icon: config.icon,
          route: config.route
        })
        callback.call(self, {
          parent: 'app',
          name,
          config
        })
      })(args.string, args.object, args.function)
    }

    /**
     * Creates a menu item that serves as an action,
     * without performing a transition
     */
    obj.action = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.action, self.parent === 'section' || self.parent === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        Ember.assert(A.actionConfig, config.action)
        let e = self.parent === 'section' ? self.element.actions : self.element[0].actions
        e.push({
          name,
          description: config.description,
          icon: config.icon,
          action: config.action,
          dismiss: config.dismiss || true
        })
        callback.call(self, {
          parent: 'action',
          name,
          config
        })
      })(args.string, args.object, args.function)
    }
  }
}
