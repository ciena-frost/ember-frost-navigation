import Ember from 'ember'

const {Component, computed, isEmpty} = Ember

export default Component.extend({
  layoutName: computed('navigationTemplate', function () {
    let navigationTemplate = this.get('navigationTemplate')
    if (isEmpty(navigationTemplate)) {
      return 'navigation'
    }
    return navigationTemplate
  }),

  actions: {
    openRoute (route) {
      this.sendAction('dismiss')
      this.sendAction('openRoute', route)
    },

    openDialog (id) {
      this.sendAction('dismiss')
      this.sendAction('openDialog', id)
    }
  }
})
