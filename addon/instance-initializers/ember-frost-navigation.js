import Ember from 'ember'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  _bindController(instance, app) {
    let config = instance.__container__.lookupFactory('config:environment')
    let lookup = {
      nav: instance.lookup('service:frost-navigation'),
      ctrl: instance.lookup(`controller:${config.navController}`),
      route: instance.lookup(`route:${config.navController}`)
    }
    lookup.route.setProperties({
      actions: {
        willTransition (transition) {
          lookup.nav.set('activeCategory', null)
        }
      }
    })
    lookup.nav.addObserver(
      'activeCategory',
      lookup.nav,
      function() {
        let active = lookup.nav.get('activeCategory')
        if (active) {
          lookup.ctrl.set('activeCategory', active)
        }
      })
  },
  initialize(instance) {
    let navigation = instance.lookup('service:frost-navigation')
    let transitionService = instance.lookup('service:liquid-fire-transitions')
    transitionService.map(transitions)
    this._bindController(instance)
    Ember.RouterDSL.prototype.nav = function(componentName, opts = {}) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        opts.name = opts.name || componentName
        this[opts.type === 'engine' ? 'mount' : 'route'](componentName, opts)
        try {
          Ember.assert('opts.navType must be either \'category\' or \'app\'',
            opts.navType === 'category' || opts.navType === 'app')
          Ember.assert('opts.type must be either \'engine\' or \'route\'',
            opts.type === 'engine' || opts.type === 'route')
        } catch (e) {
          reject(e)
        }
        navigation.register(opts)
          .then((result) => {
            try {
              this.modal('nav-modal', {
                withParams: 'activeCategory',
                dialogClass: 'frost-navigation-modal',
                controller: opts.controller || ''
              })
            } catch (e) {
              reject(e)
            }
            resolve(result)
          })
          .catch(reject)
      })
    }
  }
}
