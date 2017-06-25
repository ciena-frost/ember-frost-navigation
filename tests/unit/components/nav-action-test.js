import {expect} from 'chai'
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('nav-action', ['component:frost-link', 'helper:eq', 'helper:hook'])
describe(test.label, function () {
  test.setup()

  let sandbox, component
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    component = this.subject({hook: 'na', item: {name: 'Foo'}})
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
    let navigation, evt
    beforeEach(function () {
      navigation = {
        performAction: sandbox.stub()
      }

      evt = {
        preventDefault: sandbox.stub()
      }

      sandbox.stub(component, 'get')
      component.get.withArgs('frostNavigation').returns(navigation)
      component.get.withArgs('item').returns('the-item')

      component.click(evt)
    })

    it('should preventDefault', function () {
      expect(evt.preventDefault).to.have.callCount(1)
    })

    it('should perform action', function () {
      expect(navigation.performAction).to.have.been.calledWith('the-item')
    })
  })
})
