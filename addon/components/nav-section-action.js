import Ember from 'ember'
import layout from '../templates/components/nav-section-action'

const {
  Component,
  computed
} = Ember
export default Component.extend({
  classNames: ['nav-column', 'nav-section-action'],
  layout,
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
