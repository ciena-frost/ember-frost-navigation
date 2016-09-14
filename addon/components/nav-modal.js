import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import computed from 'ember-computed-decorators'
const {
  Component,
  observer,
  inject: {
    service
  },
  run,
  A
} = Ember

export default Component.extend({
  frostNavigation: service(),

  classNames: ['nav-modal'],
  layout,
  hook: 'frost-nav-modal',
  tabindex: 0,
  attributeBindings: ['tabindex'],
  activeCategory: null,
  _categoryChanged: observer('frostNavigation._activeCategory', function () {
    run.scheduleOnce('sync', () => {
      this.set('activeCategory', this.get('frostNavigation._activeCategory'))
      if (this.get('activeCategory') === null) {
        this.sendAction('dismiss')
      }
    })
  }),
  @computed('frostNavigation.categories', 'activeCategory')
  columns (categories = A(), activeCategory) {
    const category = categories.find((category) => {
      let name = category.name.toLowerCase()
      return name === activeCategory.toLowerCase()
    })
    return category ? category.columns : null
  },
  _initEvents () {
    ;['outsideClick', 'escape'].forEach(e => {
      this.actions[e] = function () {
        this.get('frostNavigation').dismiss()
      }
    })
  },
  init () {
    this._super(...arguments)
    this._initEvents()
  },
  actions: {
    showMore (section) {
      this.set('showActions', true)
      this.set('content', section)
    },
    goBack () {
      this.set('showActions', false)
    }
  }
})
