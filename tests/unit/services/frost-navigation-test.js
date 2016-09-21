import { expect } from 'chai'
import Ember from 'ember'
import {
  describeModule,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
import sinon from 'sinon'
const {
  Controller
} = Ember

describeModule(
  'service:frost-navigation',
  'FrostNavigationService',
  function () {
    let service
    beforeEach(function () {
      service = this.subject()
    })
    it('exists', function () {
      expect(service).to.be.ok
    })
    it('adds categories correctly', function () {
      service._registerCategory({
        name: 'add new category'
      })
      expect(service.categories).to.not.be.empty
    })
    it('returns existing category', function () {
      let name = 'existing category'
      service.set('categories', Ember.A())
      service.get('categories').pushObject({
        name
      })
      service._registerCategory({
        name
      })
      expect(service.categories.length).to.equal(1)
    })
    it('dismisses', function () {
      service.set('_activeCategory', 'test')
      expect(service.get('_activeCategory')).to.equal('test')
      service.dismiss()
      expect(service.get('_activeCategory')).to.equal(null)
    })
    it('performs action', function () {
      let spy = sinon.spy()
      let controller = Controller.extend({
        actions: {
          testAction: spy
        }
      }).create()
      service.set('_activeCategory', 'test')
      service.set('controller', controller)
      service.performAction({
        dismiss: true,
        action: 'testAction'
      })
      expect(spy.called).to.be.true
      expect(service.get('_activeCategory')).to.be.null
    })
    it('performs deprec action', function () {
      let spy = sinon.spy()
      let controller = Controller.extend({
        testAction: spy,
        send () {
          this._super(...arguments)
          if (!spy.called) { // send won't throw error in tests
            throw Error()
          }
        }
      }).create()
      service.set('controller', controller)
      service.performAction({
        action: 'testAction'
      })
      expect(spy.called).to.be.true
    })
    it('throws error when no action', function () {
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
      service.set('controller', controller)
      expect(function () {
        service.performAction({
          action: 'testAction'
        })
      }).to.throw(e)
    })
    it('transitions to a route', function () {
      let spy = sinon.spy()
      service.set('dismiss', spy)
      service.transitionTo('index')
      expect(spy.called).to.be.true
    })
  }
)
