import Ember from 'ember'
import FrostNavigationModal from 'ember-frost-navigation/components/frost-navigation-modal'
import layout from '../templates/components/frost-navigation-action'

export default Ember.Component.extend({
  classNames: ['frost-navigation-action', 'frost-link', 'text', 'secondary', 'large'],
  layout: layout,
  tagName: 'a',

  initContext: Ember.on('didInitAttrs', function () {
    this.set('_navigationModal', this.nearestOfType(FrostNavigationModal))
  }),

  onclick: Ember.on('click', function (event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true
    }
    event.preventDefault()
    event.stopPropagation()

    this.get('_navigationModal.actions.openDialog')
    .call(this.get('_navigationModal'), this.get('id'))
  })
})
