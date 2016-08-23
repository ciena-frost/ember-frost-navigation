import { expect } from 'chai'
import { $hook, initialize } from 'ember-hook'

import sinon from 'sinon'

import {
  describeComponent,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember'

describeComponent(
  'nav-route',
  'Integration: NavRouteComponent',
  {
    integration: true
  },
  function () {
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
  }
)
