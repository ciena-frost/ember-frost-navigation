/* jshint expr:true */
import {expect} from 'chai'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('nav-modal-outlet')
describe(test.label, function () {
  test.setup()

  it('renders', function () {
    // Set any properties with set(this, 'myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#nav-modal-outlet}}
    //     template content
    //   {{/nav-modal-outlet}}
    // `);

    this.render(hbs`{{nav-modal-outlet}}`)
    expect(this.$()).to.have.length(1)
  })
})
