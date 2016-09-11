import Ember from 'ember'
import layout from '../templates/components/nav-section-actions'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
import computed from 'ember-computed-decorators'
const {
  Component,
  String: {
    htmlSafe
  }
} = Ember
export default Component.extend(PropTypesMixin, {
  classNames: ['nav-column'],
  layout,
  propTypes: {
    section: PropTypes.object
  },
  @computed('section.color')
  borderBottomBinding (color) {
    return htmlSafe(`border-bottom-color: ${color}`)
  },
  actions: {
    back () {
      this.get('goBack').call()
    }
  }
})
