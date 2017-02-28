import Ember from 'ember'
const {Service} = Ember

export default Service.extend({
  user: null,

  init () {
    this._super()
    this.user = 'Test User'
  }
})
