import Ember from 'ember'
import Asserts from 'ember-frost-navigation/utils/asserts'

const {
  Service,
  assert,
  deprecate,
  inject: {
    service
  },
  Logger: {
    warn
  },
  get,
  set,
  A: EmberArray
} = Ember

const {
  CATEGORY_NAME,
  DEPRECATE_ACTION
} = Asserts

export default Service.extend({
  routing: service('-routing'),
  _activeCategory: null,
  _actions: null,
  categories: EmberArray(),
  _registerCategory (config = {}) {
    assert(CATEGORY_NAME, config.name)
    let category = this.categories.find(e => e.name === config.name)
    if (!category) {
      this.categories.pushObject(category = {
        name: config.name,
        icon: config.icon,
        pack: config.pack,
        columns: config.columns || [],
        isVisible: config.isVisible
      })
    }
    return category
  },
  dismiss () {
    set(this, '_activeCategory', null)
  },
  transitionTo (route) {
    try {
      get(this, 'routing').transitionTo(route)
    } catch (e) {
      warn('Unable to perform transition', e)
    }
    this.dismiss()
  },
  performAction (item) {
    if (item.dismiss) {
      this.dismiss()
    }
    const action = get(this, '_actions')[item.action]
    if (action && typeof action === 'function') {
      action(item)
    }
  }
})
