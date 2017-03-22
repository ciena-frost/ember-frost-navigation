import Ember from 'ember'
const {Logger, Service, assert, inject, set} = Ember
import Asserts from 'ember-frost-navigation/utils/asserts'

const {
  CATEGORY_NAME
} = Asserts

export default Service.extend({
  // == Dependencies ==========================================================

  routing: inject.service('-routing'),

  // == Keyword Properties ====================================================

  _activeCategory: null,
  _actions: null,
  categories: [],

  // == Computed Properties ===================================================

  // == Functions =============================================================

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
    if (this.get('isDestroying') || this.get('isDestroyed')) {
      return
    }

    set(this, '_activeCategory', null)
  },

  transitionTo (route) {
    try {
      this.get('routing').transitionTo(route)
    } catch (e) {
      Logger.warn('Unable to perform transition', e)
    }
    this.dismiss()
  },

  performAction (item) {
    if (item.dismiss) {
      this.dismiss()
    }
    const action = this.get('_actions')[item.action]
    if (action && typeof action === 'function') {
      action(item)
    }
  }
})
