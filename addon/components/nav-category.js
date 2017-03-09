import Ember from 'ember'
import {Component} from 'ember-frost-core'
import computed, {readOnly} from 'ember-computed-decorators'
import { PropTypes } from 'ember-prop-types'
import layout from '../templates/components/nav-category'

const {
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
      pack: 'frost'
    }
  },

  // == Computed properties ===================================================
  @readOnly
  @computed('name', 'frostNavigation._activeCategory')
  active (name, category) {
    return name === category
  },

  // == Actions ===============================================================

  click () {
    document.body.scrollTop = 0 // fix for liquid-fire modal strange animation

    const frostNavigation = this.get('frostNavigation')
    const name = this.get('name')

    const active = frostNavigation._activeCategory

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
