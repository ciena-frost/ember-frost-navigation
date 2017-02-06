import {expect} from 'chai'
import Ember from 'ember'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const {
  run
} = Ember

const {
  next
} = run

const test = integration('nav-modal')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    this.render(hbs`{{nav-modal}}`)
    expect(this.$()).to.have.length(1)
  })
  it('recomputes on _activeCategory change', function (done) {
    let obj = Ember.Object.create({
      _activeCategory: 'test'
    })
    this.set('_nav', obj)
    this.render(hbs`{{nav-modal
      frostNavigation=_nav
      activeCategory=activeCategory
    }}`)
    obj.set('_activeCategory', 'recompute')
    next(() => {
      expect(this.get('activeCategory')).to.equal('recompute')
      done()
    })
  })
})
