import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import computed from 'ember-computed-decorators'
const {
  Component,
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

  classNames: [
    'nav-modal'
  ],
  layout,

  // == Properties ============================================================

  hook: 'frost-nav-modal',

  // == Computed properties ===================================================

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
      set(this, 'showActions', true)
      set(this, 'content', section)
    }
  }
})
