import {expect} from 'chai'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'
import sinon from 'sinon'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-section-actions')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    this.render(hbs`{{nav-section-actions goBack=(action (mut showActions) false)}}`)
    expect(this.$()).to.have.length(1)
  })
  it('goes back on click', function () {
    let spy = sinon.spy()
    this.set('goBack', spy)
    this.render(hbs`{{nav-section-actions goBack=goBack}}`)
    this.$('.nav-section-header').click()
    expect(spy.called).to.be.true
  })
})
