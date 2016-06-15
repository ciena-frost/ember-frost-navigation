/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav-action',
  'Integration: NavActionComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#nav-action}}
      //     template content
      //   {{/nav-action}}
      // `);

      this.render(hbs`{{nav-action}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
