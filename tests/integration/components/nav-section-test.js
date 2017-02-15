import {expect} from 'chai'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-section')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    this.render(hbs`{{nav-section}}`)
    expect(this.$()).to.have.length(1)
  })
})
