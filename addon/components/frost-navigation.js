import Ember from 'ember'
import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'
const {
  Component,
  inject: {
    service
  },
  computed: {
    alias
  },
  run: {
    scheduleOnce
  },
  get
} = Ember

export default Component.extend({
  // == Services ==============================================================

  frostNavigation: service(),
  liquidFireTransitions: service(),

  // == Component properties ==================================================

  classNames: [
    'frost-navigation'
  ],
  layout,

  // == Properties ============================================================

  hook: 'frost-nav',

  // == Alias properties ======================================================

  categories: alias('frostNavigation.categories'),
  activeCategory: alias('frostNavigation._activeCategory'),

  // == Events ================================================================

  init () {
    this._super(...arguments)

    let frostNavigation = get(this, 'frostNavigation')
    let liquidFireTransitions = get(this, 'liquidFireTransitions')

    frostNavigation.set('_actions', get(this, 'navActions') || {})
    liquidFireTransitions.map(transitions)

    window.addEventListener('popstate', () => {
      scheduleOnce('sync', () => {
        frostNavigation.dismiss()
      })
    }, false)
  }
})
