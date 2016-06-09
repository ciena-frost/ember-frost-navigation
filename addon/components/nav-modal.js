import Ember from 'ember'
import layout from '../templates/components/nav-modal'
import _ from 'lodash'

export default Ember.Component.extend({
  classNameBindings: ['activeCategory:nav-modal:'],
  layout,

  nav: Ember.inject.service('frost-navigation'),

  activeCategory: Ember.computed.alias('nav.activeCategory'),

  columns: Ember.computed('nav.categories', 'activeCategory', function () {
    if (!this.get('activeCategory')) {
      return false
    }
    const category = _.find(this.get('nav.categories'), (category) => {
      return category.name.toLowerCase() === this.get('activeCategory').toLowerCase()
    })
    return category.columns
  })
})
