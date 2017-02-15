import {expect} from 'chai'
import {describe, it} from 'mocha'

<<<<<<< HEAD
describeComponent(
  'nav-section-actions',
  'NavSectionActionsComponent',
  {
    // Specify the other units that are required for this test
    needs: ['component:frost-icon', 'helper:hook'],
    unit: true
  },
  function () {
    it('renders', function () {
      // creates the component instance
      let component = this.subject()
      // renders the component on the page
      component.set('goBack', function () {})
      this.render()
      expect(component).to.be.ok
      expect(this.$()).to.have.length(1)
    })
  }
)
=======
import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('nav-section-actions', ['component:frost-icon'])
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // creates the component instance
    let component = this.subject()
    // renders the component on the page
    component.set('goBack', function () {})
    this.render()
    expect(component).to.be.ok
    expect(this.$()).to.have.length(1)
  })
})
>>>>>>> c671bbd72c75a67897fefdae43d2a90210c97974
