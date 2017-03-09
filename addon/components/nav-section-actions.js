import Ember from 'ember'
import { Component } from 'ember-frost-core'
import { PropTypes } from 'ember-prop-types'
import computed, {readOnly} from 'ember-computed-decorators'
import layout from '../templates/components/nav-section-actions'

const {
  String: {
    htmlSafe
  }
} = Ember
export default Component.extend({
  // == Component properties ==================================================
  layout,
  // == State properties ======================================================

  propTypes: {
    section: PropTypes.object
  },

  // == Computed properties ===================================================

  @readOnly
  @computed('section.color')
  borderBottomBinding (color) {
    return htmlSafe(`border-bottom-color: ${color}`)
  }
})
