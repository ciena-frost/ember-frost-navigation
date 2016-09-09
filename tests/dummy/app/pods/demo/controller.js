import Ember from 'ember'
const {
  Controller,
  inject: {
    service
  },
  get
} = Ember
export default Controller.extend({
  notificationMessages: service(),
  _notify (type, msg) {
    get(this, 'notificationMessages')[type](msg, {
      autoClear: true,
      clearDuration: 1000
    })
  },
  actions: {
    myAction (item) {
      this._notify('success', JSON.stringify(item))
      Logger.log(item)
    }
  }
})
