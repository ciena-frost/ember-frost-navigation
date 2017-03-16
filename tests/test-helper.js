/* global chai */
import resolver from './helpers/resolver'
import {$hook, hook} from 'ember-hook'
import {setResolver} from 'ember-mocha'

window.$hook = $hook
window.hook = hook

// TODO: package this guy into a `frost-chai` package and I guess a `ember-cli-frost-chai` that loads it
// may need to look at how ember-cli-chai does that (loads plugins that is)
chai.use(function (_chai, utils) {
  _chai.Assertion.addMethod('text', function (text, doNotTrim) {
    var actual = utils.flag(this, 'object').text()
    if (!doNotTrim) {
      actual = actual.trim()
    }

    var msg = 'expected #{this} to have text #{exp}, but the text was #{act}'
    var negatedMsg = 'expected #{this} not to have text #{exp}'

    this.assert(actual === text, msg, negatedMsg, text, actual)
  })
})

setResolver(resolver)
