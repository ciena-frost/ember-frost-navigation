const expect = chai.expect

import {describeComponent} from 'ember-mocha'
import {beforeEach, it} from 'mocha'

describeComponent(
  'frost-navigation-action',
  'FrostNavigationActionComponent',
  {},
  function () {
    let component

    beforeEach(function () {
      component = this.subject()
    })

    it('uses an anchor for wrapper element', function () {
      expect(component.tagName).to.eql('a')
    })
  }
)
