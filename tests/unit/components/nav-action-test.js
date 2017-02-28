import {expect} from 'chai'
import {describe, it} from 'mocha'

import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('nav-action', ['component:frost-link', 'helper:eq'])
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // creates the component instance
    let component = this.subject()
    // renders the component on the page
    this.render()
    expect(component.getDefaultProps).to.be.a('array')
    expect(this.$()).to.have.length(1)
  })
})
