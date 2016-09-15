import Ember from 'ember'
import layout from '../templates/components/nav-section'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
import computed from 'ember-computed-decorators'

const {
  Component,
  String: {
    htmlSafe
  }
} = Ember

export default Component.extend(PropTypesMixin, {
  classNames: 'nav-section',
  layout,
  propTypes: {
    section: PropTypes.object
  },
  @computed('section.color')
  lineStyle (color) {
    return htmlSafe(`border-bottom-color: ${color}`)
  }
})
