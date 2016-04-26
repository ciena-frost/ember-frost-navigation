import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    willTransition (transition) {
      this.controller.send('dismiss')
    }
  }
})
