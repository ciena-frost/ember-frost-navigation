import Ember from 'ember'
const {inject} = Ember
import {alias, readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'

import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default Component.extend({

  // == Dependencies ==========================================================

  frostNavigation: inject.service(),
  liquidFireTransitions: inject.service(),
  routingService: inject.service('-routing'),

  // == Keyword Properties ====================================================
  layout,

  // == PropTypes =============================================================

  getDefaultProps () {
    return {
      hook: 'frost-navigation',
      hookQualifiers: {}
    }
  },

  // == Computed Properties ===================================================

  @readOnly
  @alias('frostNavigation.categories')
  categories: null,

  @readOnly
  @alias('frostNavigation._activeCategory')
  activeCategory: null, // eslint-disable-line ember-standard/computed-property-readonly

  // == Functions =============================================================

  // == Lifecycle Hooks =======================================================

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
  },

  // == Actions ===============================================================

  actions: {}
})
