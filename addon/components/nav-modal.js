import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import _ from 'lodash'

export default Ember.Component.extend({
  nav: Ember.inject.service('frost-navigation'),

  classNames: ['nav-modal'],
  layout,
  tabindex: 0,
  attributeBindings: ['tabindex'],
  activeCategory: null,
  _categoryChanged: Ember.observer('nav._activeCategory', function () {
    this.set('activeCategory', this.get('nav._activeCategory'))
    if (this.get('activeCategory') === null) {
      this.sendAction('dismiss')
    }
  }),
  columns: Ember.computed('nav.categories', 'activeCategory', function () {
    if (!this.get('activeCategory')) {
      return false
    }
    const category = _.find(this.get('nav.categories'), (category) => {
      return category.name.toLowerCase() === this.get('activeCategory').toLowerCase()
    })
    return category.columns
  }),
  actions: {
    outsideClick () {
      this.get('nav').dismiss()
    },
    escape () {
      this.get('nav').dismiss()
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
