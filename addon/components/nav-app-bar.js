import Ember from 'ember'
import layout from '../templates/components/nav-app-bar'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

const {
  Component
} = Ember

export default Component.extend({
  classNames: ['nav-app-bar'],
  layout,

  nav: Ember.inject.service('frost-navigation'),
  transitionService: Ember.inject.service('liquid-fire-transitions'),
  categories: Ember.computed.alias('nav.categories'),
  registerTransitions: Ember.on('init', function () {
    let navigationService = this.get('nav')
    let transitionService = this.get('transitionService')

    let lookup = {
      navigation: navigationService,
      controller: this.get('targetObject')
    }
    lookup.navigation.set('_controller', lookup.controller)
    transitionService.map(transitions)

    lookup.controller.addObserver(
      'currentPath',
      lookup.controller,
      () => {
        lookup.navigation.set('_activeCategory', null)
      }
    )
    lookup.navigation.addObserver(
      '_activeCategory',
      lookup.navigation,
      () => {
        let active = lookup.navigation.get('_activeCategory')
        if (active) {
          lookup.controller.set('activeCategory', active)
        }
      }
    )
  })
})
