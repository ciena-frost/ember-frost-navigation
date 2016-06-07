import Ember from "ember";

export default {
  name: 'ember-frost-navigation',

  initialize(appInstance) {
    var navigationService = appInstance.lookup('service:frost-navigation');

    Ember.RouterDSL.prototype.nav = function(componentName, opts = {}) {
      Ember.assert('typeof opts.navType !== string', typeof opts.navType !== 'string')
      Ember.assert(`opts.type must be either 'engine' or 'route'`, opts.type !== 'engine' || opts.type !== 'route')
      this[opts.type === 'engine' ? 'mount' : 'route'](componentName, opts);
      return {
        category(){
          navigationService.registerCategory(opts.name || componentName, opts.columns || [])
        },
        app(){
          registerApp(opts.name || componentName, columnTitle, icon, name, description, path)
        }
      }[opts.navType]()
    };
  }
};
