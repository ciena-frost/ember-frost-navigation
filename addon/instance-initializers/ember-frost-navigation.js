import dsl from 'ember-frost-navigation/utils/bind-dsl'

export default {
  name: 'ember-frost-navigation',
  initialize (instance) {
    let navigation = instance.lookup('service:frost-navigation')
    dsl.init(navigation)
  }
}
