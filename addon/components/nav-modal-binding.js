import Ember from 'ember'
import layout from '../templates/components/nav-modal-binding'
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
  classNameBindings: ['activeCategory::is_hidden'],
  activeCategory: alias('frostNavigation._activeCategory')
})
