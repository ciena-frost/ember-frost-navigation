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
     * [category description]
     * @param  {[type]} config = {} [description]
     * @return {[type]}        [description]
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
     * [column description]
     * @param  {[type]} config =             {} [description]
     * @return {[type]}        [description]
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
              routes: config.routes || []
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
            app: obj.app.bind(o)
          })
        } else {
          Ember.assert('Problem in the pipeline')
        }

      })(args.string, args.object, args.function)
    }
    /**
     * [section description]
     * @param  {[type]} config =             {} [description]
     * @return {[type]}        [description]
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
          routes: []
        })
        callback.call(self, {
          app: obj.app.bind({
            parent: 'section',
            name,
            config,
            element: c,
            context: self,
            DSL: self.DSL
          })
        })
      })(args.string, args.object, args.function)

    }
    /**
     * [app description]
     * @param  {[type]} config =             {} [description]
     * @return {[type]}        [description]
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
  }
}
