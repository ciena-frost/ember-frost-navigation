import dsl from 'ember-frost-navigation/utils/bind-dsl'

const {
  init
} = dsl

export function initialize (instance) {
  let navigation = instance.lookup('service:frost-navigation')
  init(navigation)
}

export default {
  name: 'ember-frost-navigation',
  initialize
}
