import Ember from 'ember'
import layout from '../templates/components/nav-route'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

const {
  Component,
  inject: {
    service
  },
  get
} = Ember

export default Component.extend(PropTypesMixin, {
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================

  classNames: ['nav-route'],
  layout,

  // == State properties ======================================================

  propTypes: {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    route: PropTypes.string,
    icon: PropTypes.string,
    pack: PropTypes.string
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  },

  // == Actions ===============================================================

  click (e) {
    const navigation = get(this, 'frostNavigation')

    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      navigation.dismiss()
      return
    }

    if (get(this, 'route')) {
      e.preventDefault()
    }

    navigation.transitionTo(get(this, 'route'))
  }
})
