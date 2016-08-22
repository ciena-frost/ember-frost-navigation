import Ember from 'ember'
import layout from '../templates/components/nav-section'
import { PropTypes } from 'ember-prop-types'

const {
  Component,
  computed
} = Ember

export default Component.extend({
  classNames: 'nav-section',
  layout,
  propTypes: {
    section: PropTypes.object
  },
  lineStyle: computed('section.color', function () {
    let color = this.get('section.color')
    return Ember.String.htmlSafe(`border-bottom-color: ${color}`)
  }),
  getDefaultProps () {
    return {
      section: null
    }
  }
})
