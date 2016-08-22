
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
      const helper = function (name, active) {
        this.set('_name', name)
        this.set('_nav', Ember.Object.create({
          _activeCategory: active
        }))
        this.render(hbs`{{nav-category name=_name frostNavigation=_nav}}`)
        this.$('.nav-category').click()
      }
      it('handles null case', function () {
        helper.call(this, 'test', null)
      })
      it('handles not equal case', function () {
        helper.call(this, 'test', '_test')
      })
      it('handles equal case', function () {
        helper.call(this, 'test', 'test')
      })
    })
  }
)
