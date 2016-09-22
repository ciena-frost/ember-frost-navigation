/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'nav-modal-outlet',
  'Integration: NavModalOutletComponent',
  {
    integration: true
  },
  function () {
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
  }
)
