import dsl from 'ember-frost-navigation/utils/bind-dsl'
import asserts from 'ember-frost-navigation/utils/asserts'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  _bindController (instance, nav, config) {
    Ember.assert(asserts.environment, config.frostNavigation && config.frostNavigation.controller)
    let ctrl  = instance.lookup(`controller:${config.frostNavigation.controller}`)
    ctrl.addObserver(
      'currentPath',
      ctrl,
      () => {
        nav.set('_activeCategory', null)
      }
    )
    nav.addObserver(
      '_activeCategory',
      nav,
      () => {
        let active = nav.get('_activeCategory')
        if (active) {
          ctrl.set('activeCategory', active)
        }
    })
  },
  initialize (instance) {
    let config = instance.__container__.lookupFactory('config:environment')
    let navigation = instance.lookup('service:frost-navigation')
    let transitionService = instance.lookup('service:liquid-fire-transitions')
    transitionService.map(transitions)
    this._bindController(instance, navigation, config)
    dsl.init(navigation, config)
  }
}
