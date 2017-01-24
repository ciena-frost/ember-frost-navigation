import Ember from 'ember'
import layout from '../templates/components/nav-category'
import computed from 'ember-computed-decorators'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
import SpreadMixin from 'ember-spread'

const {
  Component,
  typeOf,
  inject: {
    service
  },
  run: {
    later
  },
  get,
  set
} = Ember

export default Component.extend(SpreadMixin, PropTypesMixin, {
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================

  classNames: ['nav-category'],
  classNameBindings: ['active'],
  layout,

  // == State properties ======================================================

  propTypes: {
    icon: PropTypes.string,
    name: PropTypes.string,
    pack: PropTypes.string,
    hook: PropTypes.string
  },
  getDefaultProps () {
    return {
      pack: 'frost',
      hook: 'nav-category'
    }
  },

  // == Computed properties ===================================================

  @computed('frostNavigation._activeCategory')
  active (category) {
    return get(this, 'name') === category
  },

  // == Actions ===============================================================

  click () {
    document.body.scrollTop = 0 // fix for liquid-fire modal strange animation

    let frostNavigation = get(this, 'frostNavigation')
    let active = get(frostNavigation, '_activeCategory')
    let name = get(this, 'name')

    if (typeOf(active) === 'string') {
      frostNavigation.dismiss()
      if (name !== active) { // click on another tab
        later(() => {
          set(frostNavigation, '_activeCategory', name)
        }, 200)
      }
    } else {
      set(frostNavigation, '_activeCategory', name)
    }
  }
})
