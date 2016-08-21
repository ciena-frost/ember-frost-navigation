/* jshint expr:true */
import { expect } from 'chai'
import {
  describeModule,
  it
} from 'ember-mocha'

describeModule(
  'service:frost-navigation',
  'FrostNavigationService',
  function () {
    // Replace this with your real tests.
    it('exists', function () {
      let service = this.subject()
      expect(service).to.be.ok
    })
    it('adds categories correctly', function () {
      let service = this.subject()
      service._registerCategory({
        name: 'Test name'
      })
      expect(service.categories).to.not.be.empty
    })
    it('dismisses', function () {
      let service = this.subject()
      service.set('_activeCategory', 'test')
      expect(service.get('_activeCategory')).to.equal('test')
      service.dismiss()
      expect(service.get('_activeCategory')).to.equal(null)
    })
  }
)
