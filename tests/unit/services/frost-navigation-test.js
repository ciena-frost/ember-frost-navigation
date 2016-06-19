/* jshint expr:true */
import { expect } from 'chai'
import {
  describeModule,
  it
} from 'ember-mocha'

describeModule(
  'service:frost-navigation',
  'FrostNavigationService',
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  },
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
  }
)
