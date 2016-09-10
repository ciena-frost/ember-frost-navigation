import Ember from 'ember'
import layout from '../templates/components/nav-action'
import { PropTypes } from 'ember-prop-types'

const {
  Component,
  inject
} = Ember
export default Component.extend({
  frostNavigation: inject.service(),
  classNames: [
    'nav-route',
    'nav-action'
  ],
  layout,
  propTypes: {
    item: PropTypes.object.isRequired
  },
  click (e) {
    e.preventDefault()
    this.get('frostNavigation').performAction(this.get('item'))
  },
  getDefaultProps () {
    return {
      item: {
        pack: 'frost'
      }
    }
  }
})
