import Ember from 'ember'
import layout from '../templates/components/nav-route'
import { PropTypes } from 'ember-prop-types'

export default Ember.Component.extend({
  nav: Ember.inject.service('frost-navigation'),
  classNames: ['nav-route'],
  layout,
  propTypes: {
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string,
    route: PropTypes.string
  },

  getDefaultProps () {
    return {
      pack: 'app'
    }
  },
  click () {
    this.get('nav').transitionTo(this.get('route'))
  }
})
