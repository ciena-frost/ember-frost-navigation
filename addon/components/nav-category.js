import Ember from 'ember'
import layout from '../templates/components/nav-category'

const {
  Component,
  inject
} = Ember

import {
  PropTypes
} from 'ember-prop-types'

export default Component.extend({
  frostNavigation: inject.service(),
  classNames: ['nav-category'],
  classNameBindings: ['active'],
  active: Ember.computed('nav._activeCategory', function () {
    return this.name === this.get('nav._activeCategory')
  }),
  layout,
  propTypes: {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  },
  click () {
    let navService = this.get('frostNavigation')
    if (!navService) return
    let activeCategory = navService.get('_activeCategory')
    let name = this.get('name')
    if (name === activeCategory) {
      navService.set('_activeCategory', null)
    } else if (typeof activeCategory === 'string') {
      navService.set('_activeCategory', null)
      Ember.run.later(() => {
        navService.set('_activeCategory', name)
      }, 100)
    } else {
      navService.set('_activeCategory', name)
    }
  }
})
