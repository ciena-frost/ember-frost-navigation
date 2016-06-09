import Ember from 'ember'

export default Ember.Controller.extend({
  nav: Ember.inject.service('frost-navigation'),
  activeCategory: Ember.computed.alias('nav.activeCategory'),
  actions: {
    dismiss () {
      this.set('activeCategory', false)
    }
  }
})
