import {expect} from 'chai'
import {describe, it} from 'mocha'

import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('nav-section-actions', ['component:frost-icon'])
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // creates the component instance
    let component = this.subject()
    // renders the component on the page
    component.set('goBack', function () {})
    this.render()
    expect(this.$()).to.have.length(1)
  })
})
