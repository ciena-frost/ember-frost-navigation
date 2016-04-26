import Ember from 'ember'
import layout from '../templates/components/frost-application-bar'

export default Ember.Component.extend({
  layout,
  classNames: ['frost-application-bar'],

  didUpdateAttrs (update) {
    if (update.newAttrs.isNavigationOpen.value) {
      Ember.run.next(this, function () {
        this.set('click', () => {
          this.attrs.dismiss()
        })
      })
    } else {
      this.set('click', null)
    }
  }
})
