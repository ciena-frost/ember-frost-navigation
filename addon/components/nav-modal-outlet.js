import Ember from 'ember'
import layout from '../templates/components/nav-modal-outlet'
const {
  Component,
  inject: {
    service
  },
  computed: {
    alias
  }
} = Ember

export default Component.extend({
  frostNavigation: service(),
  layout,
  classNameBindings: ['activeCategory::is-hidden'],
  activeCategory: alias('frostNavigation._activeCategory')
})
