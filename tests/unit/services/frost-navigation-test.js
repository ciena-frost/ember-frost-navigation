import {expect} from 'chai'
import Ember from 'ember'
const {A} = Ember
import {setupTest} from 'ember-mocha'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

describe('Unit / Service / frost-navigation', function () {
  setupTest('service:frost-navigation', {
    unit: true
  })

  let service
  beforeEach(function () {
    service = this.subject()
  })
  it('adds categories correctly', function () {
    service._registerCategory({
      name: 'add new category'
    })
    expect(service.categories.length).to.equal(1)
  })
  it('returns existing category', function () {
    let name = 'existing category'
    service.set('categories', A())
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
    expect(spy.called).to.equal(true)
    expect(service.get('_activeCategory')).to.equal(null)
  })
  it('transitions to a route', function () {
    let spy = sinon.spy()
    service.set('dismiss', spy)
    service.transitionTo('index')
    expect(spy.called).to.equal(true)
  })
})
