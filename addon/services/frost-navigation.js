import Ember from 'ember'
import A from 'ember-frost-navigation/utils/asserts'

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),
  _controller: null,
  _activeCategory: null,
  categories: Ember.A(),
  _registerCategory (config = {}) {
    Ember.assert(A.categoryName, config.name)
    let exists = this.categories.some(e => e.name === config.name)
    Ember.assert(A.categoryExists, !exists)
    let c
    this.categories.push(c = {
      name: config.name,
      icon: config.icon,
      pack: config.pack,
      columns: config.columns || []
    })
    return c
  },
  dismiss () {
    this.set('_activeCategory', null)
  },
  transitionTo (route) {
    this.get('routing').transitionTo(route)
    this.dismiss()
  },
  performAction (item) {
    let controller = this.get('_controller')
    if (item.dismiss) {
      this.set('_activeCategory', null)
    }
    controller.send(item.action, item)
  }
})
