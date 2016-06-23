import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})
Router.map(function () {
  this.nav('demo', {
    path: '/'
  }, function () {
    this.category('category1', {}, function () {
      this.column('column1', {
        color: '#009eef'
      }, function () {
        this.app('app1', {
          route: 'go',
          description: 'description1',
          pack: 'dummy',
          icon: 'sample'
        })
        this.engine('Blog Engine', {
          route: 'blog',
          package: 'ember-blog-engine'
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
})

export default Router
