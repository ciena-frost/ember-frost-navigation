import {expect} from 'chai'
import Ember from 'ember'
const {A} = Ember
import {module} from 'ember-test-utils/test-support/setup-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = module('service:frost-navigation')
describe(test.label, function () {
  test.setup()

  let sandbox, service
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    service = this.subject()
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('._registerCategory()', function () {
    describe('when no categories registered yet', function () {
      beforeEach(function () {
        service._registerCategory({
          name: 'add new category'
        })
      })

      it('should add categories correctly', function () {
        expect(service.categories.length).to.equal(1)
      })
    })

    describe('when category already exists', function () {
      let name
      beforeEach(function () {
        name = 'existing category'
        service.set('categories', A([{name}]))

        service._registerCategory({
          name
        })
      })

      it('should not add duplicate category', function () {
        expect(service.categories.length).to.equal(1)
      })
    })
  })

  describe('.dismiss()', function () {
    beforeEach(function () {
      service.set('_activeCategory', 'test')
      service.dismiss()
    })

    it('should clear _activeCategory', function () {
      expect(service.get('_activeCategory')).to.equal(null)
    })
  })

  describe('.performAction()', function () {
    let testAction
    beforeEach(function () {
      testAction = sandbox.stub()
      service.setProperties({
        '_actions': {testAction},
        '_activeCategory': 'test'
      })

      service.performAction({
        dismiss: true,
        action: 'testAction'
      })
    })

    it('should perform the action', function () {
      expect(testAction).to.have.callCount(1)
    })

    it('should clear _activeCategory', function () {
      expect(service.get('_activeCategory')).to.equal(null)
    })
  })

  describe('.transitionTo()', function () {
    beforeEach(function () {
      sandbox.stub(service, 'dismiss')
      service.transitionTo('index')
    })

    it('should call dismiss()', function () {
      expect(service.dismiss).to.have.callCount(1)
    })
  })
})
