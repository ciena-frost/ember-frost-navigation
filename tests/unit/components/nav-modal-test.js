import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'

describeComponent(
  'nav-modal',
  'NavModalComponent',
  {
    // Specify the other units that are required for this test
    needs: ['service:frost-navigation'],
    unit: true
  },
  function () {
    it('renders', function () {
      // creates the component instance
      let component = this.subject()
      // renders the component on the page
      this.render()
      expect(component).to.be.ok
      expect(this.$()).to.have.length(1)
    })
    it('handles actions', function () {
      let component = this.subject()
      this.render()
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
            expect(component.get('activeCategory')).to.equal(null)
          }
        },
        {
          name: 'showMore',
          test () {
            expect(component.get('showActions')).to.equal(true)
          }
        },
        {
          name: 'goBack',
          test () {
            expect(component.get('showActions')).to.equal(false)
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
  }
)
