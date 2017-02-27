import {expect} from 'chai'
import {$hook, initialize} from 'ember-hook'
import sinon from 'sinon'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-action')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
  })
  it('renders', function () {
    this.render(hbs`{{nav-action}}`)
    expect(this.$()).to.have.length(1)
  })
  it('calls perform action', function () {
    let nav = Ember.Object.create({
      performAction: sinon.spy()
    })
    this.set('_nav', nav)
    this.set('_item', 'test')
    this.render(hbs`{{nav-action
      frostNavigation=_nav
      item=_item
      hook='nav-action'
    }}`)
    $hook('nav-action').click()
    expect(nav.performAction.called).to.equal(true)
  })
})
