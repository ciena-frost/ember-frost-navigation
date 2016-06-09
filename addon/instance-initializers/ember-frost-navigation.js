import Ember from 'ember'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  initialize (instance) {
    let navigation = instance.lookup('service:frost-navigation')
    const transitionService = appInstance.lookup('service:liquid-fire-transitions')

    transitionService.map(transitions)
    Ember.RouterDSL.prototype.nav = function (componentName, opts = {}) {
      let self = this
      return new Ember.RSVP.Promise(function (resolve, reject) {
        Ember.assert('opts.navType must be either \'category\' or \'app\'',
          opts.navType !== 'category' || opts.navType !== 'app')
        Ember.assert('opts.type must be either \'engine\' or \'route\'',
          opts.type !== 'engine' || opts.type !== 'route')
        self[opts.type === 'engine' ? 'mount' : 'route'](componentName, opts)
        let r = {
          category () {
            return navigation.registerCategory(opts.name || componentName,
              opts.columns || [])
          },
          app () {
            return navigation.registerApp(opts.name || componentName,
              opts.columnTitle,
              opts.icon,
              opts.name,
              opts.description,
              opts.path)
          }
        }[opts.navType]()
        r ? resolve(r) : reject(r)
      })
    }
  }
}
