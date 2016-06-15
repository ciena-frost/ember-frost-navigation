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
    nav.category('category1', {}, function (category) {
      category.column('column1', {
        color: 'green'
      }, function (column) {
        column.app('app1', {
          description: 'description1',
          icon: 'sample'
        })
        column.section('section1', function (section){
          section.action('action1', {
            action: 'doThis'
          })
          section.app('app2')
        })
      })
      category.column('column2')
    })
  })

  routerConfig.routes.forEach((item) => {
    addRoute.call(this, item)
  })

})

export default Router
