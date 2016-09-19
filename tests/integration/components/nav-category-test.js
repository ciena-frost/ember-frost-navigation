import { expect } from 'chai'
import { $hook, initialize } from 'ember-hook'
import {
  describeComponent,
  it
} from 'ember-mocha'
import {
  describe,
  beforeEach
} from 'mocha'
import hbs from 'htmlbars-inline-precompile'
describeComponent(
  'nav-category',
  'Integration: NavCategoryComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initialize()
    })
    it('renders', function () {
      this.render(hbs`{{nav-category}}`)
      expect(this.$()).to.have.length(1)
    })
    describe('clicks', function () {
      const helper = function (name, active) {
        set(this, '_name', name)
        set(this, '_nav', Ember.Object.create({
          _activeCategory: active,
          dismiss () {
            set(this, '_activeCategory', null)
          }
        }))
        this.render(hbs`{{nav-category
          name=_name
          frostNavigation=_nav
          hook='nav-category'
        }}`)
        $hook('nav-category').click()
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
