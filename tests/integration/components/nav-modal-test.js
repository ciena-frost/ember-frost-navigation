
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

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
    it('recomputes on _activeCategory, and dismisses', function () {
      let obj = Ember.Object.create({
        _activeCategory: null,
        categories: []
      })
      this.set('_nav', obj)
      this.render(hbs`{{nav-modal activeCategory=activeCategory frostNavigation=_nav}}`)

      obj.set('_activeCategory', 'test')
      expect(this.get('activeCategory')).to.equal('test')

      obj.set('_activeCategory', null)
    })
  }
)
