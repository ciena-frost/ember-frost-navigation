import dsl from 'ember-frost-navigation/utils/bind-dsl'
import asserts from 'ember-frost-navigation/utils/asserts'
import transitions from 'ember-frost-navigation/transitions/frost-navigation'

export default {
  name: 'ember-frost-navigation',
  initialize (instance) {
    let navigation = instance.lookup('service:frost-navigation')
    dsl.init(navigation)
  }
}
