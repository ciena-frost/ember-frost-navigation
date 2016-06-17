import Ember from 'ember'
import asserts from 'ember-frost-navigation/utils/asserts'

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),
  _modalBound: false,
  _controller: null,
  _registerCategory (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.assert(asserts.categoryName, config.name)
      let exists = this.categories.some(e => e.name === config.name)
      Ember.assert('Cannot have more than one categories with the same name', !exists)
      let c
      this.categories.push(c = {
        name: config.name,
        icon: config.icon,
        pack: config.pack,
        columns: config.columns || []
      })
      resolve(c)
    })
  },
  _registerApp (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      try {
        let _category = this.categories.find(e => e.name === config.categoryName)
        Ember.assert(asserts.categoryNotFound, _category)
        let section = null
        _category.columns.forEach(function (row) {
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
          pack: config.pack,
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
    this.set('_activeCategory', null)
  },
  performAction (item) {
    let controller = this.get('_controller')
    let _actionHandler
    Ember.assert(
      `Action[${item.action}] does not exist on controller: ${controller.toString()}`,
      _actionHandler = controller.get(item.action)
    )
    if (item.dismiss) {
      this.set('_activeCategory', null)
    }
    _actionHandler(item)
  },
  _activeCategory: null,
  categories: Ember.A()
})
