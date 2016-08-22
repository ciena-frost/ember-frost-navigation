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
    it('goes back on click', function () {
      let wentBack = false
      this.set('goBack', function () {
        wentBack = true
      })
      this.render(hbs`{{nav-section-action goBack=goBack}}`)
      this.$('.nav-section-header').click()
      expect(wentBack).to.equal(true)
    })
  }
)
