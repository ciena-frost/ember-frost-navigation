import A from './asserts'
import Ember from 'ember'
export default {
  init (navigation) {
    let argify = function () {
      let r = {}
      let args = [].slice.call(arguments)
      args.forEach(e => {
        r[typeof e] = e
      })
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
          dialogClass: config.dialogClass,
          dismissWithOutsideClick: false,
          dismissWithEscape: false,
          controller: name,
          actions: config.actions
        })
        if (config.model) {
          config.model.forEach(function (e) {
            navigation._registerCategory(e)
          })
        }
        callback.call({
          category: obj.category.bind({
            parent: {
              type: 'nav',
              name,
              config
            },
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
      Ember.assert(A.category, self.parent.type === 'nav')
      ;(function (name, config = {}, callback = function () {}) {
        navigation._registerCategory({
          name,
          icon: config.icon,
          pack: config.pack || 'frost',
          columns: config.model || []
        }).then(function (category) {
          callback.call({
            column: obj.column.bind({
              parent: {
                type: 'category',
                name,
                config
              },
              element: category,
              DSL: self.DSL
            })
          })
        })
      })(args.string, args.object, args.function)
    }
    /**
     * Creates a column that performs under the context of a navigation bar.
     */
    obj.column = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.column, self.parent.type === 'category')
      ;(function (name, config = {}, callback = function () {}) {
        if (self.element) {
          let c
          self.element.columns.push(c = [
            {
              title: name,
              color: config.color || '#009eef',
              routes: config.routes || [],
              actions: config.actions || [],
              links: config.links || []
            }
          ])
          let o = {
            parent: {
              type: 'column',
              name,
              config
            },
            element: c,
            DSL: self.DSL
          }

          callback.call({
            section: obj.section.bind(o),
            app: obj.app.bind(o),
            action: obj.action.bind(o),
            link: obj.link.bind(o)
          })
        } else {
          Ember.assert('Problem in the pipeline')
        }
      })(args.string, args.object, args.function)
    }

    /**
     * Creates a section under a given column
     */
    obj.section = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.section, self.parent.type === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        let c
        self.element.push(c = {
          title: name,
          color: config.color || '#009eef',
          routes: config.routes || [],
          actions: config.actions || [],
          links: config.links || []
        })
        let o = {
          parent: {
            type: 'section',
            name,
            config
          },
          element: c,
          DSL: self.DSL
        }
        callback.call({
          app: obj.app.bind(o),
          action: obj.action.bind(o),
          link: obj.link.bind(o)
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
      Ember.assert(A.app, self.parent.type === 'section' || self.parent.type === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        config.type = config.type || 'route'
        Ember.assert(A.type, config.type)
        self.DSL[config.type === 'engine' ? 'mount' : 'route'](name, config)
        let e = self.parent.type === 'section' ? self.element.routes : self.element[0].routes
        e.push({
          name,
          description: config.description,
          icon: config.icon,
          pack: config.pack || 'frost',
          route: config.route
        })
        callback.call({
          parent: {
            type: 'app',
            name,
            config
          }

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
      Ember.assert(A.action, self.parent.type === 'section' || self.parent.type === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        Ember.assert(A.actionConfig, config.action)
        let e = self.parent.type === 'section' ? self.element.actions : self.element[0].actions
        e.push({
          name,
          description: config.description,
          icon: config.icon,
          pack: config.pack || 'frost',
          action: config.action,
          dismiss: config.dismiss || true
        })
        callback.call({
          parent: {
            type: 'action',
            name,
            config
          }
        })
      })(args.string, args.object, args.function)
    }
    obj.link = function () {
      let args = argify(...arguments)
      let self = this
      Ember.assert(A.link, self.parent.type === 'section' || self.parent.type === 'column')
      ;(function (name, config = {}, callback = function () {}) {
        let e = self.parent.type === 'section' ? self.element.links : self.element[0].links
        e.push({
          name,
          description: config.description,
          icon: config.icon,
          pack: config.pack || 'frost',
          url: config.url || name,
          openInNewTab: config.openInNewTab || true
        })
        callback.call({
          parent: {
            type: 'link',
            name,
            config
          }
        })
      })(args.string, args.object, args.function)
    }
  }
}
