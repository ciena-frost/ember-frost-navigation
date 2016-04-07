import Ember from 'ember'

const {Component, computed, isEmpty, on} = Ember

export default Component.extend({
  layoutName: computed('navigationTemplate', function () {
    let navigationTemplate = this.get('navigationTemplate')
    if (isEmpty(navigationTemplate)) {
      return 'navigation'
    }
    return navigationTemplate
  }),

  onInsert: on('didInsertElement', function () {
    Ember.$('.frost-application-bar .frost-button.navigation')
    .prop('disabled', true)
    Ember.$('.frost-application-bar')
    .on('click.frost-navigation', () => {
      this.sendAction('dismiss')
    })
  }),

  onDestroy: on('willDestroyElement', function () {
    Ember.$('.frost-application-bar .frost-button.navigation')
    .prop('disabled', false)
    Ember.$('.frost-application-bar')
    .off('click.frost-navigation')
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
