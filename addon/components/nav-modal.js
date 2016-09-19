import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import computed from 'ember-computed-decorators'
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
  set,
  A
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
  columns (categories = A(), activeCategory) {
    if (!activeCategory)
      return null
    const category = categories.find(cat => cat.name === activeCategory)
    return category ? category.columns : null
  },
  actions: {
    showMore (section) {
      set(this, 'showActions', true)
      set(this, 'content', section)
    },
    goBack () {
      set(this, 'showActions', false)
    }
  }
})
