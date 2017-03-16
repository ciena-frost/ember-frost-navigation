import {expect} from 'chai'
import Ember from 'ember'
const {run} = Ember
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('nav-category')
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

  describe('Computed Properties', function () {
    describe('active', function () {
      beforeEach(function () {
        component.set('frostNavigation', {
          '_activeCategory': 'bar'
        })
      })

      describe('when name matches active category', function () {
        beforeEach(function () {
          component.set('name', 'bar')
        })

        it('should be true', function () {
          expect(component.get('active')).to.equal(true)
        })
      })

      describe('when name does not match active category', function () {
        beforeEach(function () {
          component.set('name', 'foo')
        })

        it('should be true', function () {
          expect(component.get('active')).to.equal(false)
        })
      })
    })
  })

  describe('click()', function () {
    let navigation
    beforeEach(function () {
      component.set('name', 'foo-bar')
      navigation = {
        _activeCategory: null,
        dismiss: function () {
          this._activeCategory = null
        }
      }

      sandbox.spy(navigation, 'dismiss')
      sandbox.stub(run, 'later')
    })

    describe('when "url" is set', function () {
      beforeEach(function () {
        component.setProperties({
          frostNavigation: navigation,
          url: 'fizz-bang'
        })

        component.click()
      })

      it('should not dismiss()', function () {
        expect(navigation.dismiss).to.have.callCount(0)
      })

      it('should not schedule something', function () {
        expect(run.later).to.have.callCount(0)
      })

      it('should not set _activeCategory', function () {
        expect(navigation._activeCategory).to.equal(null)
      })
    })

    describe('when "url" is not set', function () {
      beforeEach(function () {
        component.set('frostNavigation', navigation)
      })

      describe('when no _activeCategory is set', function () {
        beforeEach(function () {
          component.click()
        })

        it('should not dismiss()', function () {
          expect(navigation.dismiss).to.have.callCount(0)
        })

        it('should not schedule something', function () {
          expect(run.later).to.have.callCount(0)
        })

        it('should set _activeCategory', function () {
          expect(navigation._activeCategory).to.equal('foo-bar')
        })
      })

      describe('when _activeCategory is the current one', function () {
        beforeEach(function () {
          component.set('frostNavigation._activeCategory', 'foo-bar')
          component.click()
        })

        it('should dismiss()', function () {
          expect(navigation.dismiss).to.have.callCount(1)
        })

        it('should not schedule something', function () {
          expect(run.later).to.have.callCount(0)
        })

        it('should not set _activeCategory', function () {
          expect(navigation._activeCategory).to.equal(null)
        })
      })

      describe('when _activeCategory is a different one', function () {
        beforeEach(function () {
          component.set('frostNavigation._activeCategory', 'fizz-bang')
          component.click()
        })

        it('should dismiss()', function () {
          expect(navigation.dismiss).to.have.callCount(1)
        })

        it('should schedule something', function () {
          expect(run.later).to.have.been.calledWith(sinon.match.func, 250)
        })

        it('should not set _activeCategory (yet)', function () {
          expect(navigation._activeCategory).to.equal(null)
        })

        describe('after the run.later() kicks off', function () {
          beforeEach(function () {
            const func = run.later.lastCall.args[0]
            func()
          })

          it('should set _activeCategory', function () {
            expect(navigation._activeCategory).to.equal('foo-bar')
          })
        })
      })
    })
  })
})
