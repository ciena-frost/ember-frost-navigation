import Ember from 'ember'
const {inject} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
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
    item: PropTypes.shape({
      action: PropTypes.string,
      description: PropTypes.string,
      dismiss: PropTypes.bool,
      icon: PropTypes.string,
      isVisible: PropTypes.bool,
      name: PropTypes.string.isRequired,
      pack: PropTypes.string
    }).isRequired
  },

  getDefaultProps () {
    return {
    }
  },

  // == Computed Properties ===================================================

  @readOnly
  @computed('item.pack')
  iconPack (pack) {
    return pack || 'frost'
  },

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
