import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.forEach((item) => {
    console.log(item)
    addRoute.call(this, item)
  })
  this.modal('nav-modal', {
    withParams: 'activeCategory',
    controller: 'demo/redesign',
    dialogClass: 'frost-navigation-modal'
  })
})

export default Router
