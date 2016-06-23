import Ember from 'ember'
import layout from '../templates/components/nav-action'

export default Ember.Component.extend({
  classNames: ['nav-route'],
  layout,
  nav: Ember.inject.service('frost-navigation'),
  click () {
    this.get('nav').performAction(this.get('item'))
  }
})
