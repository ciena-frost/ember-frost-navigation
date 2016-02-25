import Ember from 'ember'
import FrostNavigationModal from 'ember-frost-navigation/components/frost-navigation-modal'

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['frost-link'],
  attributeBindings: ['href'],

  href: Ember.computed('route', function () {
    // TODO Assert route param is required
    return this.get('route').replace(/\./g, '/')
  }),

  initContext: Ember.on('didInitAttrs', function () {
    this.set('_navigationModal', this.nearestOfType(FrostNavigationModal))
  }),

  onclick: Ember.on('click', function (event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true
    }
    event.preventDefault()
    event.stopPropagation()

    // Quasi action closure to avoid boilerplate on the interface
    this.get('_navigationModal.actions.openRoute')
    .call(this.get('_navigationModal'), this.get('route'))
  })
})
