/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember'

describeComponent(
  'nav-route',
  'Integration: NavRouteComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{nav-route}}`)
      expect(this.$()).to.have.length(1)
    })
    it('handles click, and dismiss', function () {
      let dismissed = []
      let nav = Ember.Object.create({
        dismiss () {
          dismissed.push({})
        },
        transitionTo () {}
      })
      this.set('_nav', nav)
      this.render(hbs`{{nav-route frostNavigation=_nav}}`)
      const e = (o) => Ember.$.Event('click', o)
      ;[
        e({shiftKey: true}),
        e({metaKey: true}),
        e({ctrlKey: true}),
        e()
      ].forEach(e => this.$('.nav-route').trigger(e))
      expect(dismissed.length).to.equal(3)
    })
  }
)
