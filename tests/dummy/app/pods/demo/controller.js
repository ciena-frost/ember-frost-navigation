import Ember from 'ember'
const {
  Controller,
  Logger
} = Ember
export default Controller.extend({
  actions: {
    myAction (item) {
      this.notifications.success(`[${item.action}] fired.`, {
        autoClear: true,
        clearDuration: 1000
      })
      Logger.log('Item: ', item)
    }
  }
})
