import Ember from 'ember';
import layout from '../templates/components/nav-modal-binding';

const {
  Component,
  observer,
  inject: {
    service
  },
  computed: {
    alias
  },
  run,
  A
} = Ember

export default Ember.Component.extend({
  frostNavigation: service(),
  layout,
  activeCategory: alias('frostNavigation._activeCategory')
});
