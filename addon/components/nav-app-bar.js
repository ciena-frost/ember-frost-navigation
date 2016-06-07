import Ember from 'ember'
import layout from '../templates/components/nav-app-bar'

export default Ember.Component.extend({
  classNames: ['nav-app-bar'],
  layout,

  nav: Ember.inject.service('frost-navigation'),

  categories: Ember.computed.alias('nav.categories')
})
