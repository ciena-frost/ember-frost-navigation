import {expect} from 'chai'
import {describe, it} from 'mocha'

<<<<<<< HEAD
describeComponent(
  'nav-category',
  'NavCategoryComponent',
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
      this.render()
      expect(component).to.be.ok
      expect(component.getDefaultProps).to.be.a('array')
=======
import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'
>>>>>>> c671bbd72c75a67897fefdae43d2a90210c97974

const test = unit('nav-category')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // creates the component instance
    let component = this.subject()
    // renders the component on the page
    this.render()
    expect(component).to.be.ok
    expect(component.getDefaultProps).to.be.a('array')

    expect(this.$()).to.have.length(1)
  })
})
