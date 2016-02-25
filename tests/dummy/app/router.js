import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.modal('frost-navigation-modal', {
    withParams: 'fiberplantNav',
    otherParams: {
      'fiberplantNavTemplate': 'navigationTemplate'
    },
    dialogClass: 'frost-navigation-modal',
    actions: {
      openRoute: 'openRoute'
    }
  })

  this.modal('frost-navigation-modal', {
    withParams: 'adminNav',
    otherParams: {
      'adminNavTemplate': 'navigationTemplate'
    },
    dialogClass: 'frost-navigation-modal',
    actions: {
      openRoute: 'openRoute'
    }
  })

  this.route('resource')
  this.route('dashboard')
})

export default Router
