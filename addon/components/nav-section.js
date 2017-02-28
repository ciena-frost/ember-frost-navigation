import Ember from 'ember'
import layout from '../templates/components/nav-section'
import computed from 'ember-computed-decorators'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

const {
  Component,
  String: {
    htmlSafe
  }
} = Ember

export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================

  classNames: 'nav-section',
  layout,

  // == State properties ======================================================

  propTypes: {
    section: PropTypes.object
  },

  // == Computed properties ===================================================

  @computed('section.color')
  lineStyle (color) {
    return htmlSafe(`border-bottom-color: ${color}`)
  }
})
