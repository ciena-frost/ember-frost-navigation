/* jshint expr:true */
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
      Object.keys(component._actions).forEach(e => {
        component.send(e, {})
      })
    })
  }
)
