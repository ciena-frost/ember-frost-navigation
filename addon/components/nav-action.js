import Ember from 'ember'
import layout from '../templates/components/nav-action'

const {
  Component,
  inject
} = Ember
export default Component.extend({
  frostNavigation: inject.service(),
  classNames: ['nav-route', 'nav-action'],
  layout,
  click () {
    this.get('frostNavigation').performAction(this.get('item'))
  }
})
