import Ember from 'ember'
import layout from '../templates/components/nav-route'
import { PropTypes } from 'ember-prop-types'

export default Ember.Component.extend({
  classNames: ['nav-route'],
  layout,
  propTypes: {
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pack: PropTypes.string
  },

  getDefaultProps () {
    return {
      pack: 'frost'
    }
  }
})
