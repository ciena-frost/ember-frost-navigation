import config from './config/environment'
import Ember from 'ember'
const {Router: EmberRouter} = Ember

var Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})
// BEGIN-SNIPPET router
Router.map(function () {
  this.route('test', {path: '/test/:id'})

  this.nav('demo', {path: '/'}, function () {
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
          route: 'go',
          description: 'This is a route',
          pack: 'frost-nav',
          icon: 'application'
        })
        this.engine('Blog Engine', {
          route: 'blog',
          description: 'This is an engine example',
          package: 'ember-blog-engine',
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
