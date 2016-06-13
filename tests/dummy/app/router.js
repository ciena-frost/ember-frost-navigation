import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

var Router = Ember.Router.extend({
  location: config.locationType
})
Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.routes.forEach((item) => {
    addRoute.call(this, item)
  })
  routerConfig.categories.forEach((category) => {
    this.nav(category.name, {
      navType: 'category',
      type: 'route',
      columns: category.columns
    })
  })
})

export default Router
