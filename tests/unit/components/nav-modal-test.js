import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'

describeComponent(
  'nav-modal',
  'NavModalComponent',
  {
    // Specify the other units that are required for this test
    needs: ['service:frost-navigation'],
    unit: true
  },
  function () {
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
          name: 'outsideClick',
          test () {
            expect(component.get('activeCategory')).to.equal(null)
          },
          cleanup () {
            component.get('frostNavigation').set('_activeCategory', 'test')
          }
        },
        {
          name: 'escape',
          test () {
            expect(component.get('activeCategory')).to.be.null
          }
        },
        {
          name: 'showMore',
          test () {
            expect(component.get('showActions')).to.be.true
          }
        },
        {
          name: 'goBack',
          test () {
            expect(component.get('showActions')).to.be.false
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
  }
)
