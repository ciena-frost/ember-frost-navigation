/* jshint expr:true */
import { expect } from 'chai'
import Ember from 'ember'
import {
  describeModule,
  it
} from 'ember-mocha'

const {
  Controller
} = Ember

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
    it('performs action', function () {
      let service = this.subject()
      let actionFired = false
      let controller = Controller.extend({
        actions: {
          testAction () {
            actionFired = true
          }
        }
      }).create()
      service.set('_activeCategory', 'test')
      service.set('_controller', controller)
      service.performAction({
        dismiss: true,
        action: 'testAction'
      })
      expect(actionFired).to.equal(true)
      expect(service.get('_activeCategory')).to.equal(null)
    })
    it('performs deprec action', function () {
      let service = this.subject()
      let actionFired = false
      let controller = Controller.extend({
        testAction () {
          actionFired = true
        },
        send () {
          this._super(...arguments)
          if (!actionFired) {
            throw Error()
          }
        }
      }).create()
      service.set('_controller', controller)
      service.performAction({
        action: 'testAction'
      })
      expect(actionFired).to.equal(true)
    })
    it('throws error when no action', function () {
      let service = this.subject()
      let actionFired = false
      let e = 'no luck'
      let controller = Controller.extend({
        send () {
          this._super(...arguments)
          if (!actionFired) {
            throw e
          }
        }
      }).create()
      service.set('_controller', controller)
      expect(function () {
        service.performAction({
          action: 'testAction'
        })
      }).to.throw(e)
    })
  }
)
