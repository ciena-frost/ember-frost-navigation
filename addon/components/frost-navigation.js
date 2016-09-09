import Ember from 'ember'
import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

const {
  Component,
  inject,
  computed: {
    alias
  },
  run
} = Ember

export default Component.extend({
  frostNavigation: inject.service(),
  liquidFireTransitions: inject.service(),
  classNames: [
    'frost-navigation',
    'frost-application-bar'
  ],
  layout,
  hook: 'frost-nav',
  categories: alias('frostNavigation.categories'),
  init () {
    this._super(...arguments)

    let frostNavigation = this.get('frostNavigation')
    let liquidFireTransitions = this.get('liquidFireTransitions')

    let ctrl = this.get('targetObject')
    liquidFireTransitions.map(transitions)

    frostNavigation.set('_controller', ctrl)
    frostNavigation.addObserver(
      '_activeCategory',
      frostNavigation,
      () => {
        let active = frostNavigation.get('_activeCategory')
        if (active) {
          ctrl.set('activeCategory', active)
        }
      }
    )
    window.addEventListener('popstate', () => {
      run.scheduleOnce('sync', () => {
        frostNavigation.dismiss()
      })
    }, false)
  }
})
