import Ember from 'ember'

export default Ember.Component.extend({
  layoutName: Ember.computed('navigationTemplate', function () {
    let navigationTemplate = this.get('navigationTemplate')
    if (Ember.isEmpty(navigationTemplate)) {
      return 'navigation'
    }
    return navigationTemplate
  }),

  onInsert: Ember.on('didInsertElement', function () {
    Ember.$('.frost-application-bar .frost-button.navigation')
    .prop('disabled', true)
    Ember.$('.frost-application-bar')
    .on('click.frost-navigation', () => {
      this.sendAction('dismiss')
    })
  }),

  onDestroy: Ember.on('willDestroyElement', function () {
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
