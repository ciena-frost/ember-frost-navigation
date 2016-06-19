/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'nav-section-action',
  'Integration: NavSectionActionComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{nav-section-action}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
