import Ember from 'ember'
import A from 'ember-frost-navigation/utils/asserts'

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

export default Service.extend({
  ctrl: null,
  _activeCategory: null,
  categories: EmberArray(),
  _registerCategory (config = {}) {
    assert(A.categoryName, config.name)
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
      get(this, 'ctrl').transitionToRoute(route)
    } catch (e) {
      warn('Unable to perform transition', e)
    }
    this.dismiss()
  },
  performAction (item) {
    let controller = get(this, 'ctrl')

    if (item.dismiss) {
      this.dismiss()
    }

    try {
      controller.send(item.action, item)
    } catch (e) {
      let actionHandler = get(controller, item.action)
      if (actionHandler && typeof actionHandler === 'function') {
        deprecate(A.depAction, false, {
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
