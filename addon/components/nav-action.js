import Ember from 'ember';
import layout from '../templates/components/nav-action';

export default Ember.Component.extend({
  layout,
  nav: Ember.inject.service('frost-navigation'),
  click () {
    this.get('nav').performAction(this.get('item'))
  }
});
