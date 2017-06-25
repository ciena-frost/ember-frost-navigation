import Ember from 'ember'
const {inject, run, set, typeOf} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/nav-category'

export default Component.extend({
  // == Dependencies ==========================================================

  frostNavigation: inject.service(),

  // == Keyword Properties ====================================================

  classNameBindings: ['active'],
  layout,

  // == PropTypes =============================================================

  propTypes: {
    icon: PropTypes.string,
    name: PropTypes.string,
    pack: PropTypes.string,
    url: PropTypes.string,
    tabbed: PropTypes.bool
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

  // == Functions =============================================================

  // == DOM Events ============================================================

  click () {
    if (this.get('url')) {
      // when we've rendered an anchor, nothing else to do
      return
    }

    document.body.scrollTop = 0 // fix for liquid-fire modal strange animation

    const frostNavigation = this.get('frostNavigation')
    const name = this.get('name')

    const active = frostNavigation._activeCategory

    if (typeOf(active) === 'string') {
      frostNavigation.dismiss()
      if (name !== active) { // click on another tab
        run.later(() => {
          if (this.isDestroying || this.isDestroyed || frostNavigation.isDestroying || frostNavigation.isDestroyed) {
            return
          }

          set(frostNavigation, '_activeCategory', name)
        }, 250)
      }
    } else {
      set(frostNavigation, '_activeCategory', name)
    }
  },

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {}
})
