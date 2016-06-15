import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

var Router = Ember.Router.extend({
  location: config.locationType
})
Router.map(function () {
  let routerConfig = config.APP.routingConfig

  this.nav('demo.redesign', {
    categories: routerConfig.categories
  }, function (nav) {
    nav.category('categoryName', {}, function (category) {
      category.column('columnName', function (column) {
        column.app('app1')
        column.section('sectionName', function (section){
          section.app('app2')
        })
      })
    })
  })

  routerConfig.routes.forEach((item) => {
    addRoute.call(this, item)
  })

})

export default Router
