import Ember from 'ember'

export default Ember.Controller.extend({
  fiberplantNav: false,
  fiberplantNavTemplate: 'demo/nav-fiberplant',
  adminNav: false,
  adminNavTemplate: 'demo/nav-admin',
  isNavigationOpen: Ember.computed.or('fiberplantNav', 'adminNav'),

  actions: {
    dismiss () {
      this.set('fiberplantNav', false)
      this.set('adminNav', false)
    },

    openFiberplantNav () {
      Ember.run.next(this, function () {
        this.set('fiberplantNav', true)
      })
    },

    openAdminNav () {
      Ember.run.next(this, function () {
        this.set('adminNav', true)
      })
    },

    openRoute: function (route) {
      this.transitionToRoute(route)
    }
  }
})
