import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import _ from 'lodash'

export default Ember.Component.extend({
  classNames: ['nav-modal'],
  layout,
  nav: Ember.inject.service('frost-navigation'),
  tabindex: 0,
  attributeBindings: ['tabindex'],
  activeCategory: null,
  _categoryChanged: function () {
    this.set('activeCategory', this.get('nav._activeCategory'))
    if (this.get('activeCategory') === null) {
      this.sendAction('dismiss')
    }
  }.observes('nav._activeCategory'),

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
      this.get('nav').set('_activeCategory', null)
    },
    escape () {
      this.get('nav').set('_activeCategory', null)
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
