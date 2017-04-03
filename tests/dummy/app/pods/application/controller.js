  import Ember from 'ember'
  const {Controller, Logger, inject} = Ember

  export default Controller.extend({

    frostNavigation: inject.service(),
    notifier: inject.service(),

    _notify (type, message) {
      this.get('notifier').addNotification({
        message,
        type,
        autoClear: true,
        clearDuration: 1200
      })
    },

    actions: {
      myAction (item) {
        this._notify(
          'success',
          `Item '${item.action}' fired`
        )

        Logger.log(item)
      }
    }
  })
