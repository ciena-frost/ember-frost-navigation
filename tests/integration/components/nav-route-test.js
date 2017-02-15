<<<<<<< HEAD
/**
 * Integration test for the nav-route component
 */

import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {$hook, initialize as initializeHook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {afterEach, beforeEach, describe} from 'mocha'
import sinon from 'sinon'

describeComponent(
  'nav-modal',
  'Integration: NavModalComponent',
  {
    integration: true
  },
  function () {
    let sandbox

    beforeEach(function () {
      sandbox = sinon.sandbox.create()
      initializeHook()
    })

    afterEach(function () {
      sandbox.restore()
    })

    describe('after render', function () {
      beforeEach(function () {
        this.setProperties({
          myHook: 'myThing'
        })

        this.render(hbs`
          {{nav-route
            hook=myHook
          }}
        `)

        return wait()
      })

      it('should have an element', function () {
        expect(this.$()).to.have.length(1)
      })

      it('should be accessible via the hook', function () {
        expect($hook('myThing')).to.have.length(1)
      })
=======
import {expect} from 'chai'
import Ember from 'ember'
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
>>>>>>> c671bbd72c75a67897fefdae43d2a90210c97974
    })
    this.set('_nav', nav)
    this.render(hbs`{{nav-route
      frostNavigation=_nav
      route='test'
      hook='nav-route'
    }}`)
    const e = (o) => Ember.$.Event('click', o)
    ;[
      e({shiftKey: true}),
      e({metaKey: true}),
      e({ctrlKey: true}),
      e()
    ].forEach(e => $hook('nav-route').trigger(e))
    expect(nav.dismiss.calledThrice).to.be.true
  })
})
