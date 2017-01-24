import Ember from 'ember'
import layout from '../templates/components/nav-route'

import PropTypesMixin, { PropTypes } from 'ember-prop-types'
import SpreadMixin from 'ember-spread'

const {
  Component,
  inject: {
    service
  },
  get
} = Ember

export default Component.extend(SpreadMixin, PropTypesMixin, {
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================

  classNames: ['nav-route'],
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
