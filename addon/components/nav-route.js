import Ember from 'ember'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/nav-route'

const {
  inject: {
    service
  },
  get
} = Ember

export default Component.extend({
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================
  layout,
  // == State properties ======================================================

  propTypes: {
    name: PropTypes.string,
    description: PropTypes.string,
    route: PropTypes.string,
    icon: PropTypes.string,
    pack: PropTypes.string,
    params: PropTypes.object
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  },
  // == Computed Properties ===================================================

  // == Actions ===============================================================

  click (e) {
    const navigation = get(this, 'frostNavigation')

    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      navigation.dismiss()
      return
    }
  }

})
