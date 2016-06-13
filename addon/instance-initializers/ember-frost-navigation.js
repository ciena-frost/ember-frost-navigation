import dsl from 'ember-frost-navigation/utils/bind-dsl'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  _bindController (instance, config) {
    let nav  = instance.lookup('service:frost-navigation')
    let ctrl = instance.lookup(`controller:${config.frostNavigation.controller}`)
    nav.addObserver(
      'activeCategory',
      nav,
      () => {
        let active = nav.get('activeCategory')
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
    this._bindController(instance, config)
    dsl.init(navigation, config)
  }
}
