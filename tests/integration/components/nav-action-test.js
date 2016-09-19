import { expect } from 'chai'
import { $hook, initialize } from 'ember-hook'
import sinon from 'sinon'
import {
  describeComponent,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'nav-action',
  'Integration: NavActionComponent',
  {
    integration: true
  },
  function () {
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
      expect(nav.performAction.called).to.be.true
    })
  }
)
