import asserts from './asserts'
export default {
  init (navigation) {
    Ember.RouterDSL.prototype.nav = function (componentName, opts = {}) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        opts.name = opts.name || componentName
        this[opts.type === 'engine' ? 'mount' : 'route'](componentName, opts)
        try {
          Ember.assert(asserts.navType, opts.navType === 'category' || opts.navType === 'app')
          Ember.assert(asserts.type, opts.type === 'engine' || opts.type === 'route')
        } catch (e) {
          reject(e)
        }
        navigation.register(opts)
          .then((result) => {
            try {
              if(!navigation.get('_modalBound'))
                this.modal('nav-modal', {
                  withParams: 'activeCategory',
                  dialogClass: 'frost-navigation-modal',
                  dismissWithOutsideClick: false,
                  controller: this.parent
                })
              navigation.set('_modalBound', true)
            } catch (e) {
              reject(e)
            }
            resolve(result)
          })
          .catch(reject)
      }).catch(Ember.assert)
    }
  }
}
