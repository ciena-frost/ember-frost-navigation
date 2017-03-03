import Ember from 'ember'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'
import layout from '../templates/components/nav-action'

const {
  inject: {
    service
  }
} = Ember
export default Component.extend({
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================
  layout,

  // == State properties ======================================================

  propTypes: {
    item: PropTypes.object.isRequired,
    hook: PropTypes.string
  },

  getDefaultProps () {
    return {
      item: {
        pack: 'frost'
      },
      hook: 'nav-action'
    }
  },
  // == Computed Properties ===================================================

  // == Actions ===============================================================

  click (e) {
    e.preventDefault()

    this.get('frostNavigation').performAction(this.get('item'))
  }
})
