import Ember from 'ember'
const {
  Controller,
  Logger: {
    log
  },
  inject: {
    service
  },
  get
} = Ember
// BEGIN-SNIPPET controller
export default Controller.extend({
  frostNavigation: service(),
  notificationMessages: service(),
  _notify (type, msg) {
    get(this, 'notificationMessages')[type](msg, {
      htmlContent: true,
      autoClear: true,
      clearDuration: 1000
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
    }
  }
})
// END-SNIPPET
