import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})
Router.map(function () {
  this.nav('demo', {
    path: '/'
  }, function () {
    this.category('Category 1', {
      pack: 'dummy',
      icon: 'sample'
    }, function () {
      this.column('Column 1', {
        color: '#009eef'
      }, function () {
        this.app('App 1', {
          route: 'go',
          description: 'description1',
          pack: 'dummy',
          icon: 'sample'
        })
        this.engine('Blog Engine', {
          route: 'blog',
          package: 'ember-blog-engine',
          pack: 'dummy',
          icon: 'sample'
        })
        this.section('Section 1', {
          color: '#a1e7ff'
        }, function () {
          this.link('Google', {
            url: 'http://google.ca',
            description: 'Go to Google',
            pack: 'dummy',
            icon: 'sample'
          })
          this.link('http://google.ca')
          this.action('Action 1', {
            action: 'myAction',
            pack: 'dummy',
            icon: 'sample'
          })
        })
      })
      this.column('Column 2')
    })
  })
})

export default Router
