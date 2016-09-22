import Ember from 'ember'
import Asserts from 'ember-frost-navigation/utils/asserts'

const {
  Service,
  assert,
  deprecate,
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
  controller: null,
  _activeCategory: null,
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
      get(this, 'controller').transitionToRoute(route)
    } catch (e) {
      warn('Unable to perform transition', e)
    }
    this.dismiss()
  },
  performAction (item) {
    let controller = get(this, 'controller')

    if (item.dismiss) {
      this.dismiss()
    }

    try {
      controller.send(item.action, item)
    } catch (e) {
      let actionHandler = get(controller, item.action)
      if (actionHandler && typeof actionHandler === 'function') {
        deprecate(DEPRECATE_ACTION, false, {
          id: 'ember-frost-navigation',
          until: '*'
        })
        actionHandler.call(controller, item)
      } else {
        throw e
      }
    }
  }
})
