import {expect} from 'chai'
import Ember from 'ember'
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('nav-section-actions', ['component:frost-icon'])
describe(test.label, function () {
  test.setup()

  let sandbox, component
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    component = this.subject({goBack () {}})
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

  describe('Computed Properties', function () {
    describe('borderBotomBinding', function () {
      let value
      beforeEach(function () {
        sandbox.stub(Ember.String, 'htmlSafe').returns('safe-string')
        component.set('section', {color: 'blue'})
        value = component.get('borderBottomBinding')
      })

      it('should run the style through htmlSafe()', function () {
        expect(Ember.String.htmlSafe).to.have.been.calledWith('border-bottom-color: blue')
      })

      it('should return the safe string', function () {
        expect(value).to.equal('safe-string')
      })
    })
  })
})
