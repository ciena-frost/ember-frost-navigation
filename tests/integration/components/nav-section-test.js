import {expect} from 'chai'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('nav-section')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.render(hbs`{{nav-section}}`)
  })

  it('should render a single element in the DOM', function () {
    expect(this.$()).to.have.length(1)
  })

  // FIXME: add real tests
  it.skip('should have real tests', function () {
    expect(true).to.equal(false)
  })
})
