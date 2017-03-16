import {expect} from 'chai'
import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {beforeEach, describe, it} from 'mocha'

const test = unit('nav-modal', ['service:frost-navigation'])
describe(test.label, function () {
  test.setup()

  let component
  beforeEach(function () {
    component = this.subject()
  })

  describe('after render', function () {
    beforeEach(function () {
      this.render()
    })

    it('should put a single element on the DOM', function () {
      expect(this.$()).to.have.length(1)
    })
  })

  describe('Actions', function () {
    describe('setView()', function () {
      beforeEach(function () {
        component.setProperties({
          actionsVisible: false,
          content: ''
        })

        component.send('setView', 'foo-bar')
      })

      it('should set actionVisible to true', function () {
        expect(component.get('actionsVisible')).to.equal(true)
      })

      it('should set the content', function () {
        expect(component.get('content')).to.equal('foo-bar')
      })
    })
  })

  describe('Computed Properties', function () {
    describe('columns', function () {
      let categories
      beforeEach(function () {
        categories = [
          {
            name: 'foo',
            columns: [1, 2, 3]
          },
          {
            name: 'bar',
            columns: [4, 5, 6]
          },
          {
            name: 'baz',
            columns: [7, 8, 9]
          }
        ]
        component.setProperties({
          'frostNavigation._activeCategory': 'bar',
          'frostNavigation.categories': categories
        })
      })

      it('should grabe the right columns', function () {
        expect(component.get('columns')).to.eql([4, 5, 6])
      })
    })
  })
})
