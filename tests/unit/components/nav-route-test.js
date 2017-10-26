import {expect} from 'chai'
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('nav-route', ['helper:hook', 'service:frost-navigation'])
describe(test.label, function () {
  test.setup()

  let sandbox, component
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    component = this.subject()
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('after render', function () {
    beforeEach(function () {
      this.render()
    })

    it('should put a single element on the DOM', function () {
      expect(this.$()).to.have.length(1)
    })
  })

  describe('.click()', function () {
    let navigation, evt, getStub
    beforeEach(function () {
      navigation = {
        dismiss: sandbox.stub()
      }

      evt = {
        ctrlKey: false,
        metaKey: false,
        shiftKey: false
      }

      getStub = sandbox.stub(component, 'get').withArgs('frostNavigation').returns(navigation)
      getStub.withArgs('route').returns('a-route')
      getStub.withArgs('routingService.currentRouteName').returns('a-different-route')
    })

    describe('when no modifier keys are pressed', function () {
      beforeEach(function () {
        component.click(evt)
      })

      it('should not call .dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(0)
      })
    })

    describe('when meta key is pressed', function () {
      beforeEach(function () {
        evt.metaKey = true
        component.click(evt)
      })

      it('should call .dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(1)
      })
    })

    describe('when shift key is pressed', function () {
      beforeEach(function () {
        evt.shiftKey = true
        component.click(evt)
      })

      it('should call .dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(1)
      })
    })

    describe('when ctrl key is pressed', function () {
      beforeEach(function () {
        evt.ctrlKey = true
        component.click(evt)
      })

      it('should call .dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(1)
      })
    })

    describe('when currentRouteName === targetRoute', function () {
      beforeEach(function () {
        getStub.withArgs('routingService.currentRouteName').returns('a-route')
        component.click(evt)
      })

      it('should call .dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(1)
      })
    })
  })
})
