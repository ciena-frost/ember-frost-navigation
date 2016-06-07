import Ember from 'ember'
import layout from '../templates/components/nav-category'
import { PropTypes } from 'ember-prop-types'

export default Ember.Component.extend({
  classNames: ['nav-category'],
  layout,
  propTypes: {
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
