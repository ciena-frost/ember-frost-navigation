import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})
Router.map(function () {
  let routerConfig = config.APP.routingConfig

  this.nav('demo', {
    model: routerConfig.categories
  }, function () {
    this.category('category1', {}, function () {
      this.column('column1', {
        color: '#009eef'
      }, function () {
        this.app('app1', {
          description: 'description1',
          pack: 'dummy',
          icon: 'sample'
        })
        this.section('section1', {
          color: '#a1e7ff'
        }, function () {
          this.link('Google', {
            url: 'http://google.ca',
            description: 'Go to google',
            pack: 'dummy',
            icon: 'sample'
          })
          this.link('http://google.ca')
          this.action('action1', {
            action: 'doThis'
          })
        })
      })
      this.column('column2')
    })
  })

  this.route('demo', { path: '/' }, function () {
    this.route('go')
  })
})

export default Router
