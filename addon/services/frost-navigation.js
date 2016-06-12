import Ember from 'ember'

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),
  _registerMap: {
    category (config) {
      return this._registerCategory(config)
    },
    app (config) {
      return this._registerApp(config)
    }
  },
  register (config) {
    Ember.assert('Navigation Type must be specified', config.navType)
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._registerMap[config.navType].call(this, config)
        .then(resolve)
        .catch(reject)
    })
  },
  _registerCategory (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      try {
        Ember.assert('Property \'name\' was not defined.', config.name)
      } catch (e) {
        reject(e)
      }
      this.categories.push({
        name: config.name,
        columns: config.columns || []
      })
      if (config.as) {
        this._registerApp({
          categoryName: config.name,
          columnTitle: config.columnTitle,
          name: config.as,
          icon: config.icon,
          color: config.color,
          description: config.description,
          route: config.as
        }).then(resolve).catch(reject)
      } else {
        resolve(this)
      }
    })
  },
  _registerApp (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      try {
        let _category = this.categories.find(e => e.name === config.categoryName)
        Ember.assert(`Category ${_category} does not exist!`, _category)
        let section = _category.columns.forEach(function (row) {
          section = row.find(e => e.title === config.columnTitle)
        })
        if (!section) {
          _category.columns.push([section = {
            title: config.columnTitle,
            color: config.color,
            routes: []
          }])
        }
        section.routes.push({
          icon: config.icon,
          name: config.name,
          description: config.description,
          route: config.route
        })
      } catch (e) {
        reject(e)
      }
      resolve(this)
    })
  },
  transitionTo (route) {
    this.get('routing').transitionTo(route)
    this.set('activeCategory', null)
  },
  activeCategory: null,
  categories: Ember.A()
})
