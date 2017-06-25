import {expect} from 'chai'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = integration('nav-section-actions')
describe(test.label, function () {
  test.setup()

  let sandbox, handler
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    handler = sandbox.stub()
    this.setProperties({handler})
    this.render(hbs`
      {{nav-section-actions
        hook='actions'

        onGoBack=handler
      }}
    `)

    return wait()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should render a single element in the DOM', function () {
    expect(this.$()).to.have.length(1)
  })

  it('should not call handler yet', function () {
    expect(handler).to.have.callCount(0)
  })

  describe('when clicked', function () {
    beforeEach(function () {
      this.$('.nav-section-header').click()
      return wait()
    })

    it('should call the handler', function () {
      expect(handler).to.have.callCount(1)
    })
  })
})
