import Ember from 'ember'
import layout from '../templates/components/nav-section-actions'
import { PropTypes } from 'ember-prop-types'
const {
  Component,
  computed
} = Ember
export default Component.extend({
  classNames: ['nav-column', 'nav-section-actions'],
  layout,
  propTypes: {
    section: PropTypes.object
  },
  borderBottomBinding: computed('section.color', function () {
    let color = this.get('section.color')
    return Ember.String.htmlSafe(`border-bottom-color: ${color}`)
  }),
  actions: {
    back () {
      this.get('goBack').call()
    }
  }
})
