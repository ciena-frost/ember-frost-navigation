import Ember from 'ember'
import layout from '../templates/components/nav-category'
import {
  PropTypes
} from 'ember-prop-types'

export default Ember.Component.extend({
  nav: Ember.inject.service('frost-navigation'),
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
  },
  actions: {
    expand () {
      let n = this.get('nav')
      if (!n) return
      let name = this.get('name')
      if (name == n.get('activeCategory')) {
        n.set('activeCategory', false)
      }
      else if (typeof n.get('activeCategory') === 'string') {
        n.set('activeCategory', false)
        Ember.run.later((function () {
          n.set('activeCategory', name)
        }), 200)
      }
      else {
        n.set('activeCategory', name)
      }
    }
  }
})
