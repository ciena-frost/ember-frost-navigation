import Ember from 'ember'
import {Component} from 'ember-frost-core'
import computed, {readOnly} from 'ember-computed-decorators'
import layout from '../templates/components/nav-modal'

const {
  inject: {
    service
  },
  computed: {
    alias
  },
  run: {bind},
  $
} = Ember

export default Component.extend({
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================
  layout,

  // == Properties ============================================================

  // == Computed properties ===================================================

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

  // == Alias properties ======================================================

  activeCategory: alias('frostNavigation._activeCategory'),

  // == DOM Events ============================================================
  _onFocusOut (event) {
    const frostNavigation = this.get('frostNavigation')
    const $target = $(event.target)

    const isOutsideClick = !$('.frost-navigation').has($target).length

    if (isOutsideClick) {
      frostNavigation.dismiss()
    }
  },
  // == Lifecycle Hooks =======================================================
  didInsertElement () {
    this._super(...arguments)
    this._boundedFocusOut = bind(this, this._onFocusOut)

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
