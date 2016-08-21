/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'nav-action',
  'Integration: NavActionComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{nav-action}}`)
      expect(this.$()).to.have.length(1)
    })
    it('calls perform action', function () {
      let self = this
      let nav = Ember.Object.create({
        performAction () {
          self.set('_item', null)
        }
      })
      this.set('_nav', nav)
      this.set('_item', 'test')
      this.render(hbs`{{nav-action frostNavigation=_nav item=_item}}`)
      this.$('.nav-action').click()
      expect(this.get('_item')).to.equal(null)
    })
  }
)
