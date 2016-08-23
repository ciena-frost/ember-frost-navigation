import Ember from 'ember'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

const {
  run
} = Ember

const {
  next
} = run

describeComponent(
  'nav-modal',
  'Integration: NavModalComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{nav-modal}}`)
      expect(this.$()).to.have.length(1)
    })
    it('recomputes on _activeCategory change', function () {
      let obj = Ember.Object.create({
        _activeCategory: 'test'
      })
      this.set('_nav', obj)
      this.render(hbs`{{nav-modal frostNavigation=_nav}}`)
      obj.set('_activeCategory', 'recompute')
    })
    it('recomputes on _activeCategory, and dismisses', function (done) {
      let nav = Ember.Object.create({
        _activeCategory: null,
        categories: []
      })
      this.set('_nav', nav)
      this.render(hbs`{{nav-modal activeCategory=activeCategory frostNavigation=_nav}}`)
      next(() => {
        nav.set('_activeCategory', 'test')
        next(() => {
          expect(this.get('activeCategory')).to.equal('test')
          done()
        })
      })
    })
  }
)
