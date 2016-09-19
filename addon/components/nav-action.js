import Ember from 'ember'
import layout from '../templates/components/nav-action'
import { PropTypes } from 'ember-prop-types'

const {
  Component,
  inject: {
    service
  },
  get
} = Ember
export default Component.extend({
  frostNavigation: service(),
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
    get(this, 'frostNavigation').performAction(get(this, 'item'))
  },
  getDefaultProps () {
    return {
      item: {
        pack: 'frost'
      }
    }
  }
})
