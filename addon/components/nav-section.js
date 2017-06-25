import Ember from 'ember'
import computed, {readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'
import layout from '../templates/components/nav-section'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  propTypes: {
    section: PropTypes.object,

    onSetView: PropTypes.func.isRequired
  },

  // == Computed Properties ===================================================

  @readOnly
  @computed('section.color')
  lineStyle (color) {
    return Ember.String.htmlSafe(`border-bottom-color: ${color}`)
  },

  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {}
})
