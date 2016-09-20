const b = '[ember-frost-navigation] - '
export default {
  CATEGORY_NAME: `${b}Property 'name' was not defined.`,
  CATEGORY: `${b}category must be nested within this.nav`,
  COLUMN: `${b}column must be nested within this.category`,
  SECTION: `${b}section must be nested within this.column`,
  APP: `${b}app must be nested within this.section or this.column`,
  ACTION: `${b}action must be nested within this.section or this.column`,
  ACTION_CONFIG: `${b}Configuration object requires property as an action`,
  ROUTE: `${b}'config.route must be defined'`,
  PACKAGE: `${b}config.package must be defined`,
  DEPRECATE_ACTION: `${b}Action should be defined within the 'actions' hook on your controller`
}
