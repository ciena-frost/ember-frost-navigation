import Ember from 'ember'
import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'
import SlotsMixin from 'ember-block-slots'

const {
  Component,
  inject,
  computed,
  run
} = Ember

export default Component.extend(SlotsMixin, {
  frostNavigation: inject.service(),
  liquidFireTransitions: inject.service(),
  classNames: ['frost-navigation'],
  layout,
  hook: 'frost-nav',
  categories: computed.alias('frostNavigation.categories'),
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
