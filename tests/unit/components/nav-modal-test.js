import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'

import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('nav-modal', ['service:frost-navigation'])
describe(test.label, function () {
  test.setup()

  let component
  beforeEach(function () {
    component = this.subject()
    this.render()
  })
  it('renders', function () {
    expect(component).to.be.ok
    expect(this.$()).to.have.length(1)
  })
  it('handles actions', function () {
    ;[
      {
        name: 'setView',
        test () {
          expect(component.get('showActions')).to.be.true
        }
      }
    ].forEach(e => {
      component.send(e.name, {})
      if (e.hasOwnProperty('test')) {
        e.test()
      }
      if (e.hasOwnProperty('cleanup')) {
        e.cleanup()
      }
    })
  })
  it('computes categories correctly', function () {
    let columns = [1, 2, 3]
    let nav = component.get('frostNavigation')
    component.set('activeCategory', 'test')
    nav.setProperties({
      categories: [
        {
          name: 'test',
          columns
        }
      ]
    })
    expect(component.get('columns')).to.equal(columns)
  })
})
