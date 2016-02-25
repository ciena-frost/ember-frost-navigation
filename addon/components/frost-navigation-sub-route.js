import FrostNavigationLink from 'ember-frost-navigation/components/frost-navigation-link'
import layout from '../templates/components/frost-navigation-sub-route'

export default FrostNavigationLink.extend({
  layout: layout,
  classNames: ['text', 'secondary', 'large', 'sub-route']
})
