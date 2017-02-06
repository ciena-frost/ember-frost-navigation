import {expect} from 'chai'
import {$hook, initialize} from 'ember-hook'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-category')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
  })
  it('renders', function () {
    this.render(hbs`{{nav-category}}`)
    expect(this.$()).to.have.length(1)
  })
  describe('clicks', function () {
    const helper = function (name, _activeCategory) {
      this.set('_name', name)
      this.set('_nav', Ember.Object.create({
        _activeCategory,
        dismiss () {
          this.set('_activeCategory', null)
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
})
