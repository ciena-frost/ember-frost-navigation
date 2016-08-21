import Ember from 'ember'
import layout from '../templates/components/nav-route'
import { PropTypes } from 'ember-prop-types'

const {
  Component,
  inject
} = Ember

export default Component.extend({
  frostNavigation: inject.service(),
  classNames: ['nav-route'],
  layout,

  propTypes: {
    description: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string,
    route: PropTypes.string
  },

  getDefaultProps () {
    return {
      pack: 'app'
    }
  },
  click (e) {
    const navigation = this.get('frostNavigation')
    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      navigation.dismiss()
      return
    }
    navigation.transitionTo(this.get('route'))
  }
})
