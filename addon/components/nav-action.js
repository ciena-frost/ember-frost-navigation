import Ember from 'ember'
const {inject} = Ember
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/nav-action'

export default Component.extend({
  // == Dependencies ==========================================================

  frostNavigation: inject.service(),

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  propTypes: {
    item: PropTypes.object.isRequired
  },

  getDefaultProps () {
    return {
      item: {
        pack: 'frost'
      }
    }
  },

  // == Computed Properties ===================================================

  // == Functions =============================================================

  // == DOM Events ============================================================

  click (e) {
    e.preventDefault()

    this.get('frostNavigation').performAction(this.get('item'))
  },

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {}
})
