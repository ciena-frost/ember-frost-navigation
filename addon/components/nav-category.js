import Ember from 'ember'
import layout from '../templates/components/nav-category'
import {
  PropTypes
} from 'ember-prop-types'

export default Ember.Component.extend({
  nav: Ember.inject.service('frost-navigation'),
  classNames: ['nav-category'],
  layout,
  propTypes: {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  },
  click () {
    let navService = this.get('nav')
    if (!navService) return
    
    let activeCategory = navService.get('activeCategory')
    let name = this.get('name')
    if (name === activeCategory) {
      navService.set('activeCategory', null)
    }
    else if (typeof activeCategory === 'string') {
      navService.set('activeCategory', null)
      Ember.run.later((function () {
        navService.set('activeCategory', name)
      }), 200)
    }
    else {
      navService.set('activeCategory', name)
    }
  }
})
