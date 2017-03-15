import Ember from 'ember'
const {$, inject, run} = Ember
import computed, {alias, readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'

import layout from '../templates/components/nav-modal'

export default Component.extend({
  // == Dependencies ==========================================================

  frostNavigation: inject.service(),

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  // == Computed properties ===================================================

  @alias('frostNavigation._activeCategory')
  activeCategory: null, // eslint-disable-line ember-standard/computed-property-readonly

  @readOnly
  @computed('frostNavigation.categories', 'activeCategory')
  columns (categories = [], activeCategory) {
    return !activeCategory
      ? null
      : (() => {
        const category = categories.find(cat => cat.name === activeCategory)
        return category ? category.columns : null
      })()
  },

  // == Functions =============================================================

  _onFocusOut (event) {
    const frostNavigation = this.get('frostNavigation')
    const $target = $(event.target)

    const isOutsideClick = !$('.frost-navigation').has($target).length

    if (isOutsideClick) {
      frostNavigation.dismiss()
    }
  },

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  didInsertElement () {
    this._super(...arguments)
    this._boundedFocusOut = run.bind(this, this._onFocusOut)

    window.addEventListener('click', this._boundedFocusOut, {passive: true})
  },

  willDestroyElement () {
    this._super(...arguments)

    window.removeEventListener('click', this._boundedFocusOut)
  },

  // == Actions ===============================================================

  actions: {
    setView (content) {
      this.setProperties({
        actionsVisible: true,
        content
      })
    }
  }
})
