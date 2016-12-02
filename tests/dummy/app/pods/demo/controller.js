import Ember from 'ember'
const {
  Controller,
  Logger: {
    log
  },
  inject: {
    service
  },
  get,
  set
} = Ember
// BEGIN-SNIPPET controller
export default Controller.extend({
  count: 0,
  frostNavigation: service(),
  notificationMessages: service(),
  _notify (type, msg) {
    get(this, 'notificationMessages')[type](msg, {
      htmlContent: true,
      autoClear: true,
      clearDuration: 1000
    })
  },
  init () {
    this._super(...arguments)
    let customRouteObject = Ember.Object.extend({
      description: 'custom route',
      icon: 'application',
      pack: 'frost-nav',
      name: 'Custom Route',
      route: 'demo.go'
    }).create()
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
    get(this, 'frostNavigation.categories').push({
      name: 'Custom Category',
      columns
    })
  },
  actions: {
    myAction (item) {
      this._notify(
        'success',
        `<code>
          <pre>${JSON.stringify(item, null, ' ')}</pre>
        </code>`
      )
      log(item)
    },
    incrementCount () {
      let count = get(this, 'count') + 1
      set(this, 'count', count)
      set(this, 'customRouteObject.params', {count})
    }
  }
})
// END-SNIPPET
