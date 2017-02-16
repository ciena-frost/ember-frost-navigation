import Ember from 'ember'
import {Component} from 'ember-frost-core'
import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'
const {
  inject: {
    service
  },
  computed: {
    alias
  }
} = Ember

export default Component.extend({
  // == Services ==============================================================
  frostNavigation: service(),
  liquidFireTransitions: service(),
  routingService: service('-routing'),
  // == Component properties ==================================================
  layout,
  // == Properties ============================================================
  getDefaultProps () {
    return {
      hook: 'frost-navigation'
    }
  },
  // == Alias properties ======================================================
  categories: alias('frostNavigation.categories'),
  activeCategory: alias('frostNavigation._activeCategory'),

  // == Events ================================================================

  init () {
    this._super(...arguments)

    const frostNavigation = this.get('frostNavigation')
    const liquidFireTransitions = this.get('liquidFireTransitions')
    const routingService = this.get('routingService')

    frostNavigation.set('_actions', this.get('navActions') || {})

    liquidFireTransitions.map(transitions)

    routingService.addObserver('currentRouteName', () => {
      frostNavigation.dismiss()
    })
  }
})
