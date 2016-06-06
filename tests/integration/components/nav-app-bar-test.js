/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav-app-bar',
  'Integration: NavAppBarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#nav-app-bar}}
      //     template content
      //   {{/nav-app-bar}}
      // `);

      this.render(hbs`{{nav-app-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
