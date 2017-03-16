import Ember from 'ember'
const {inject} = Ember
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/nav-route'

export default Component.extend({
  // == Dependencies ==========================================================

  frostNavigation: inject.service(),

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  propTypes: {
    description: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    pack: PropTypes.string,
    params: PropTypes.object,
    route: PropTypes.string,
    tabbed: PropTypes.bool,
    url: PropTypes.string
  },

  getDefaultProps () {
    return {
      pack: 'frost'
    }
  },

  // == Functions =============================================================

  // == DOM Events ============================================================

  click (e) {
    const navigation = this.get('frostNavigation')

    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      navigation.dismiss()
      return
    }
  },

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {}
})
