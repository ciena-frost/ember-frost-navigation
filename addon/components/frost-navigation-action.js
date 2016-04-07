import Ember from 'ember'
import FrostNavigationModal from 'ember-frost-navigation/components/frost-navigation-modal'
import layout from '../templates/components/frost-navigation-action'

const {Component, on, ViewUtils} = Ember

export default Component.extend({
  classNames: ['frost-navigation-action', 'frost-link', 'text', 'secondary', 'large'],
  layout: layout,
  tagName: 'a',

  initContext: on('didInitAttrs', function () {
    this.set('_navigationModal', this.nearestOfType(FrostNavigationModal))
  }),

  onclick: on('click', function (event) {
    if (!ViewUtils.isSimpleClick(event)) {
      return true
    }
    event.preventDefault()
    event.stopPropagation()

    this.get('_navigationModal.actions.openDialog')
    .call(this.get('_navigationModal'), this.get('id'))
  })
})
