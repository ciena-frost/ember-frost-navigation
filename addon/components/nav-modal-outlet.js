import Ember from 'ember'
const {
  Component,
  deprecate
} = Ember

export default Component.extend({
  tagName: '',
  init () {
    this._super(...arguments)
    const msg = '{{nav-modal-outlet}} has been deprecated. Remove from any consuming templates.'
    deprecate(msg, false, {
      id: 'ember-frost-navigation/nav-modal-outlet',
      until: '8.0.0',
      url: 'http://github.com/ciena-frost/ember-frost-navigation'
    })
  }
})
