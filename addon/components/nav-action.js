import Ember from 'ember'
import layout from '../templates/components/nav-action'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

const {
  Component,
  inject: {
    service
  },
  get
} = Ember
export default Component.extend(PropTypeMixin, {
  // == Services ==============================================================

  frostNavigation: service(),

  // == Component properties ==================================================

  classNames: [
    'nav-route',
    'nav-action'
  ],
  layout,

  // == State properties ======================================================

  propTypes: {
    item: PropTypes.object.isRequired,
    hook: PropTypes.string
  },
  getDefaultProps () {
    return {
      item: {
        pack: 'frost'
      },
      hook: 'nav-action'
    }
  },
  // == Computed Properties ===================================================

  // == Actions ===============================================================

  click (e) {
    e.preventDefault()
    get(this, 'frostNavigation').performAction(get(this, 'item'))
  }
})
