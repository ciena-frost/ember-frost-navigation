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
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    route: PropTypes.string,
    icon: PropTypes.string,
    pack: PropTypes.string
  },
  click (e) {
    const navigation = this.get('frostNavigation')

    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      navigation.dismiss()
      return
    }

    if (this.get('route')) {
      e.preventDefault()
    }

    navigation.transitionTo(this.get('route'))
  },
  getDefaultProps () {
    return {
      pack: 'frost'
    }
  }
})
