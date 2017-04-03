import Ember from 'ember'
const {Controller, get, inject, set} = Ember

// BEGIN-SNIPPET controller
export default Controller.extend({

  frostNavigation: inject.service(),

  count: 0,

  init () {
    this._super(...arguments)
    let customRouteObject = Ember.Object.extend({}).create({
      description: 'custom route',
      icon: 'application',
      pack: 'frost-nav',
      name: 'Custom Route',
      route: 'test',
      routeModels: ['id0'],
      routeQueryParams: {count: 0}
    })
    set(this, 'customRouteObject', customRouteObject)
    let columns = [
      [
        {
          title: 'Custom Column',
          routes: [
            customRouteObject
          ]
        }
      ]
    ]

    this.get('frostNavigation.categories').push({
      name: 'Custom Category',
      columns
    })

    this.get('frostNavigation.categories').push({
      name: 'NPM',
      pack: 'frost-nav',
      url: 'http://npmjs.org',
      icon: 'application'
    })
  },

  actions: {
    incrementCount () {
      let count = get(this, 'count') + 1

      set(this, 'count', count)

      set(this, 'customRouteObject.routeModels', [`id${count}`])
      set(this, 'customRouteObject.routeQueryParams', {count})
    }
  }
})
// END-SNIPPET
