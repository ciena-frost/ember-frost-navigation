const title = '[ember-frost-navigation] - '
export default {
  CATEGORY_NAME: `${title}Property 'name' was not defined.`,
  CATEGORY: `${title}category must be nested within this.nav`,
  COLUMN: `${title}column must be nested within this.category`,
  SECTION: `${title}section must be nested within this.column`,
  APP: `${title}app must be nested within this.section or this.column`,
  ACTION: `${title}action must be nested within this.section or this.column`,
  ACTION_CONFIG: `${title}Configuration object requires property as an action`,
  ROUTE: `${title}'config.route must be defined'`,
  DEPRECATE_ACTION: `${title}Action should exist within the 'actions' hook`
}
