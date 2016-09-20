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
  get,
  set
} = Ember

export default Component.extend({
  frostNavigation: service(),
  liquidFireTransitions: service(),
  classNames: [
    'frost-navigation'
  ],
  layout,
  hook: 'frost-nav',
  categories: alias('frostNavigation.categories'),
  activeCategory: alias('frostNavigation._activeCategory'),
  init () {
    this._super(...arguments)

    let frostNavigation = get(this, 'frostNavigation')
    let liquidFireTransitions = get(this, 'liquidFireTransitions')

    set(frostNavigation, 'ctrl', get(this, 'targetObject'))
    liquidFireTransitions.map(transitions)

    window.addEventListener('popstate', () => {
      scheduleOnce('sync', () => {
        frostNavigation.dismiss()
      })
    }, false)
  }
})
