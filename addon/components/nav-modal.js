import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import computed from 'ember-computed-decorators'
import KeyCodes from '../utils/keycodes'
const {
  Component,
  inject: {
    service
  },
  computed: {
    alias
  },
  get,
  set,
  A: EmberArray
} = Ember

export default Component.extend({
  frostNavigation: service(),
  classNames: [
    'nav-modal'
  ],
  layout,
  hook: 'frost-nav-modal',
  tabindex: 0,
  attributeBindings: ['tabindex'],
  activeCategory: alias('frostNavigation._activeCategory'),

  @computed('frostNavigation.categories', 'activeCategory')
  columns (categories = EmberArray(), activeCategory) {
    return !activeCategory
      ? null
      : (() => {
        const category = categories.find(cat => cat.name === activeCategory)
        return category ? category.columns : null
      })()
  },
  keyUp (e) {
    if (e.keyCode === KeyCodes.ESCAPE) {
      get(this, 'frostNavigation').dismiss()
    }
  },
  actions: {
    setView (section) {
      set(this, 'showActions', true)
      set(this, 'content', section)
    }
  }
})
