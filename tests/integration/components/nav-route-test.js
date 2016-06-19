/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

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
  }
)
