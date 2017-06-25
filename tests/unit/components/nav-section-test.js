import {expect} from 'chai'
import Ember from 'ember'
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('nav-section')
describe(test.label, function () {
  test.setup()

  let sandbox, component
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    component = this.subject({hook: 'ns', onSetView () {}})
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
    describe('lineStyle', function () {
      let lineStyle
      beforeEach(function () {
        sandbox.stub(Ember.String, 'htmlSafe').returns('safe-string')
        component.set('section', {color: 'blue'})
        lineStyle = component.get('lineStyle')
      })

      it('should run the style through htmlSafe()', function () {
        expect(Ember.String.htmlSafe).to.have.been.calledWith('border-bottom-color: blue')
      })

      it('should return the safe string', function () {
        expect(lineStyle).to.equal('safe-string')
      })
    })
  })
})
