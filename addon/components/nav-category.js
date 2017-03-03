import Ember from 'ember'
import {Component} from 'ember-frost-core'
import computed, {readOnly} from 'ember-computed-decorators'
import { PropTypes } from 'ember-prop-types'
import layout from '../templates/components/nav-category'

const {
  typeOf,
  inject: {
    service
  },
  run: {
    later
  },
  set,
  typeOf
} = Ember

export default Component.extend({
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
  @readOnly
  @computed('frostNavigation._activeCategory')
  active (category) {
    return get(this, 'name') === category
  },

  // == Actions ===============================================================

  click () {
    document.body.scrollTop = 0 // fix for liquid-fire modal strange animation

    const frostNavigation = get(this, 'frostNavigation')
    const active = get(frostNavigation, '_activeCategory')
    const name = get(this, 'name')

    if (typeOf(active) === 'string') {
      frostNavigation.dismiss()
      if (name !== active) { // click on another tab
        later(() => {
          set(frostNavigation, '_activeCategory', name)
        }, 250)
      }
    } else {
      set(frostNavigation, '_activeCategory', name)
    }
  }
})
