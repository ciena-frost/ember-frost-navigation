import Ember from 'ember'
import layout from '../templates/components/nav-action'

const {
  Component
} = Ember
export default Component.extend({
  nav: Ember.inject.service('frost-navigation'),
  classNames: ['nav-route'],
  layout,
  click () {
    this.get('nav').performAction(this.get('item'))
  }
})
