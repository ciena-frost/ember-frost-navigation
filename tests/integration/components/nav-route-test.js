import {expect} from 'chai'
import Ember from 'ember'
const {$} = Ember
import {$hook, initialize} from 'ember-hook'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-route')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
  })
  it('renders', function () {
    this.render(hbs`{{nav-route}}`)
    expect(this.$()).to.have.length(1)
  })
  it('handles click, and dismiss', function () {
    let nav = Ember.Object.create({
      dismiss: sinon.spy(),
      transitionTo: sinon.spy()
    })
    this.set('_nav', nav)
    this.render(hbs`{{nav-route
      frostNavigation=_nav
      route='test'
      hook='nav-route'
    }}`)
    const e = (o) => $.Event('click', o)
    ;[
      e({shiftKey: true}),
      e({metaKey: true}),
      e({ctrlKey: true}),
      e()
    ].forEach(e => $hook('nav-route').trigger(e))
    expect(nav.dismiss.calledThrice).to.equal(true)
  })
})
