import Ember from 'ember'
import {Component} from 'ember-frost-core'
import computed, {readOnly} from 'ember-computed-decorators'
import layout from '../templates/components/nav-modal'

const {
  inject: {
    service
  },
  computed: {
    alias
  },
  set,
  A: EmberArray
} = Ember

export default Component.extend({
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================
  layout,

  // == Properties ============================================================

  // == Computed properties ===================================================

  @readOnly
  @computed('frostNavigation.categories', 'activeCategory')
  columns (categories = EmberArray(), activeCategory) {
    return !activeCategory
      ? null
      : (() => {
        const category = categories.find(cat => cat.name === activeCategory)
        return category ? category.columns : null
      })()
  },

  // == Alias properties ======================================================

  activeCategory: alias('frostNavigation._activeCategory'),

  // == Actions ===============================================================

  actions: {
    setView (section) {
      this.set('actionsVisible', true)
      this.set('content', section)
    }
  }
})
