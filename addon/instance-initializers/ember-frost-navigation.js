import Ember from 'ember'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  initialize(instance) {
    // let navigation = instance.lookup('service:frost-navigation')
    // let transitionService = instance.lookup('service:liquid-fire-transitions')
    // transitionService.map(transitions)
    Ember.RouterDSL.prototype.nav = function(componentName, opts = {}) {
      let self = this
      return new Ember.RSVP.Promise(function(resolve, reject) {
        opts.name = opts.name || componentName
        self[opts.type === 'engine' ? 'mount' : 'route'](componentName, opts)
        try {
          Ember.assert('opts.navType must be either \'category\' or \'app\'',
            opts.navType === 'category' || opts.navType === 'app')
          Ember.assert('opts.type must be either \'engine\' or \'route\'',
            opts.type === 'engine' || opts.type === 'route')
        } catch (e) {
          reject(e)
        }
        navigation.register(opts)
          .then(function(result) {
            console.log("WOOOO")
            self.modal('nav-modal', {
              withParams: 'activeCategory',
              dialogClass: 'frost-navigation-modal'
            })
            resolve(result)
          })
          .catch(reject)
      })
    }
  }
}
