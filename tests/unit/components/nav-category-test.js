import {expect} from 'chai'
import {describe, it} from 'mocha'

import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('nav-category')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // creates the component instance
    let component = this.subject()
    // renders the component on the page
    this.render()
    expect(component).to.be.ok
    expect(component.getDefaultProps).to.be.a('array')

    expect(this.$()).to.have.length(1)
  })
})
