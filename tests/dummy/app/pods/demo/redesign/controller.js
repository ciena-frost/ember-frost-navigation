import Ember from 'ember'

export default Ember.Controller.extend({
  nav: Ember.inject.service('frost-navigation'),
  activeCategory: null,
  _active: function(){
    this.set('activeCategory', this.get('nav.activeCategory'))
  }.observes('nav.activeCategory').on('init'),
  actions: {
    dismiss(){
      this.set('nav.activeCategory', null)
    }
  }
})
