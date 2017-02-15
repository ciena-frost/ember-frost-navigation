import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})
// BEGIN-SNIPPET router
Router.map(function () {
  this.route('demo', {path: '/'}, function () {
    this.route('go')
    this.route('test', {path: '/test/:id'})
    this.mount('ember-blog-engine', {
      as: 'blog'
    })
  })
  this.nav(function () {
    this.category('Category 1', {
      pack: 'frost-nav',
      icon: 'application'
    }, function () {
      this.column('Column 1', {
        color: '#009eef'
      }, function () {
        this.action('Action Example', {
          action: 'myAction',
          pack: 'frost-nav',
          icon: 'application',
          description: 'This is an action',
          inline: true
        })
        this.app('Route Example', {
          route: 'demo.go',
          description: 'This is a route',
          pack: 'frost-nav',
          icon: 'application'
        })
        this.engine('Blog Engine', {
          route: 'demo.blog',
          description: 'This is an engine example',
          pack: 'frost-nav',
          icon: 'application'
        })
        this.section('More Content', {
          color: '#a1e7ff'
        }, function () {
          this.link('Google', {
            url: 'http://google.ca',
            description: 'Go to Google',
            pack: 'frost-nav',
            icon: 'application',
            tabbed: true
          })
          this.link('http://google.ca')
          this.action('Action 1', {
            action: 'myAction',
            pack: 'frost-nav',
            icon: 'application'
          })
        })
      })
      this.column('Empty Column')
    })
  })
})

export default Router
// END-SNIPPET
