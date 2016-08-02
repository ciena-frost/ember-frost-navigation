import Ember from 'ember'
import layout from '../templates/components/frost-navigation'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'
import SlotsMixin from 'ember-block-slots'

const {
  Component
} = Ember

export default Component.extend(SlotsMixin, {
  classNames: ['frost-navigation'],
  layout,
  nav: Ember.inject.service('frost-navigation'),
  transitionService: Ember.inject.service('liquid-fire-transitions'),
  categories: Ember.computed.alias('nav.categories'),
  registerTransitions: Ember.on('init', function () {
    let navigationService = this.get('nav')
    let transitionService = this.get('transitionService')
    let ctrl = this.get('targetObject')
    transitionService.map(transitions)

    navigationService.set('_controller', ctrl)
    navigationService.addObserver(
      '_activeCategory',
      navigationService,
      () => {
        let active = navigationService.get('_activeCategory')
        if (active) {
          ctrl.set('activeCategory', active)
        }
      }
    )
    window.addEventListener('popstate', () => {
      navigationService.set('_activeCategory', null)
    }, false)
  })
})
