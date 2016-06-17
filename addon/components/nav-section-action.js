import Ember from 'ember'
import layout from '../templates/components/nav-section-action'

export default Ember.Component.extend({
  classNames: ['nav-column', 'nav-section-action'],
  goBack: function () {},
  layout,
  actions: {
    back () {
      this.get('goBack').call()
    }
  }
})
