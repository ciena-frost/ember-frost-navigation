import Ember from 'ember'
import layout from '../templates/components/nav-category'
import computed from 'ember-computed-decorators'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
const {
  Component,
  inject: {
    service
  },
  run: {
    later
  },
  get
} = Ember

export default Component.extend(PropTypesMixin, {
  frostNavigation: service(),
  classNames: ['nav-category'],
  classNameBindings: ['active'],
  @computed('frostNavigation._activeCategory')
  active (category) {
    return get(this, 'name') === category
  },
  layout,
  propTypes: {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string
  },
  click () {
    let navService = get(this, 'frostNavigation')
    if (!navService) return
    document.body.scrollTop = 0 // fix for liquid-fire modal strange animation
    let activeCategory = get(navService, '_activeCategory')
    let name = get(this, 'name')
    if (name === activeCategory) {
      navService.dismiss()
    } else {
      if (typeof activeCategory === 'string') {
        navService.dismiss()
        later(() => {
          navService.set('_activeCategory', name)
        }, 200)
      } else {
        navService.set('_activeCategory', name)
      }
    }
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  }
})
