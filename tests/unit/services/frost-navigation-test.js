import { expect } from 'chai'
import Ember from 'ember'
import {
  describeModule,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
import sinon from 'sinon'

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
      service.set('_actions', {
        testAction: spy
      })
      service.set('_activeCategory', 'test')
      service.performAction({
        dismiss: true,
        action: 'testAction'
      })
      expect(spy.called).to.be.true
      expect(service.get('_activeCategory')).to.be.null
    })
    it('transitions to a route', function () {
      let spy = sinon.spy()
      service.set('dismiss', spy)
      service.transitionTo('index')
      expect(spy.called).to.be.true
    })
  }
)
