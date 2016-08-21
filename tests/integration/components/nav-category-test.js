/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import {
  describe
} from 'mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'nav-category',
  'Integration: NavCategoryComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{nav-category}}`)
      expect(this.$()).to.have.length(1)
    })
    describe('clicks', function () {
      it('handles null case', function () {
        this.set('_name', 'test')
        this.set('_nav', Ember.Object.create({
          _activeCategory: null
        }))
        this.render(hbs`{{nav-category name=name frostNavigation=_nav}}`)
        this.$('.nav-category').click()
      })
      it('handles not equal case', function () {
        this.set('_name', 'test')
        this.set('_nav', Ember.Object.create({
          _activeCategory: '_test'
        }))
        this.render(hbs`{{nav-category name=name frostNavigation=_nav}}`)
        this.$('.nav-category').click()
      })
    })
  }
)
