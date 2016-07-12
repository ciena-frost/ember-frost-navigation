import Ember from 'ember'
import A from 'ember-frost-navigation/utils/asserts'

const {
  assert,
  deprecate
} = Ember

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),
  _controller: null,
  _activeCategory: null,
  categories: Ember.A(),
  _registerCategory (config = {}) {
    assert(A.categoryName, config.name)
    let exists = this.categories.some(e => e.name === config.name)
    assert(A.categoryExists, !exists)
    let c = null
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
      this.dismiss()
    }

    try {
      controller.send(item.action, item)
    } catch (e) {
      let actionHandler = controller.get(item.action)
      if (actionHandler && typeof actionHandler === 'function') {
        deprecate(A.depAction)
        actionHandler.call(controller, item)
      } else {
        throw e
      }
    }
  }
})
