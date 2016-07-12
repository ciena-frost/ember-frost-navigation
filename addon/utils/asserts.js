let b = '[ember-frost-navigation] - '
export default {
  environment: `
    ${b}config/environment must have field frostNavigation.controller
    defined as the path to your controller (see dummy app for ember-frost-navigation)
  `,
  navType: `${b}opts.navType must be either 'category' or 'app'`,
  type: `${b}opts.type must be either 'engine' or 'route'`,
  categoryName: `${b}Property 'name' was not defined.`,
  categoryNotFound: `${b}Category does not exist!`,
  category: `${b}category must be nested within this.nav`,
  column: `${b}column must be nested within this.category`,
  section: `${b}section must be nested within this.column`,
  app: `${b}app must be nested within this.section or this.column`,
  action: `${b}action must be nested within this.section or this.column`,
  actionConfig: `${b}Configuration object requires property as an action`,
  categoryExists: `${b}Category already exists`,
  route: `${b}'config.route must be defined'`,
  package: `${b}config.package must be defined`,
  depAction: `
    ${b}Action should be defined within the 'actions' hook on your controller
  `
}
