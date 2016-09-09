import Ember from 'ember'
import layout from '../templates/components/nav-category'
import { PropTypes } from 'ember-prop-types'
const {
  Component,
  inject: {
    service
  },
  run: {
    later
  },
  computed
} = Ember

export default Component.extend({
  frostNavigation: service(),
  classNames: ['nav-category'],
  classNameBindings: ['active'],
  active: computed('frostNavigation._activeCategory', function () {
    return this.name === this.get('frostNavigation._activeCategory')
  }),
  layout,
  propTypes: {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string
  },
  click () {
    let navService = this.get('frostNavigation')
    if (!navService) return
    let activeCategory = navService.get('_activeCategory')
    let name = this.get('name')
    if (name === activeCategory) {
      navService.dismiss()
    } else if (typeof activeCategory === 'string') {
      navService.dismiss()
      later(() => {
        navService.set('_activeCategory', name)
      }, 100)
    } else {
      navService.set('_activeCategory', name)
    }
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  }
})
