import Ember from 'ember'
import layout from '../templates/components/nav-modal'

const {
  Component,
  computed,
  observer,
  inject,
  run,
  A
} = Ember

export default Component.extend({
  frostNavigation: inject.service(),

  classNames: ['nav-modal'],
  layout,
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
  columns: computed(
    'frostNavigation.categories',
    'activeCategory',
    function () {
      if (!this.get('activeCategory')) {
        return false
      }
      const categories = this.get('frostNavigation.categories') || A()
      const category = categories.find((category) => {
        let name = category.name.toLowerCase()
        return name === this.get('activeCategory').toLowerCase()
      })
      return category ? category.columns : null
    }),
  actions: {
    outsideClick () {
      this.get('frostNavigation').dismiss()
    },
    escape () {
      this.get('frostNavigation').dismiss()
    },
    showMore (section) {
      this.set('showActions', true)
      this.set('content', section)
    },
    goBack () {
      this.set('showActions', false)
    }
  }
})
