import {expect} from 'chai'
import {$hook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import {stubService} from 'ember-test-utils/test-support/stub'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = integration('nav-action')
describe(test.label, function () {
  test.setup()

  let sandbox, item, frostNavigation

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    frostNavigation = stubService(this, sandbox, 'frostNavigation', ['performAction'])

    item = {
      name: 'Barry Allen',
      description: 'The fastest man alive'
    }
    this.set('item', item)

    this.render(hbs`
      {{nav-action
        hook='navAction'
        hookPrefix='na'
        hookQualifiers=(hash foo='bar')
        item=item
      }}
    `)

    return wait()
  })

  describe('when no icon present', function () {
    it('should have the proper hook', function () {
      expect($hook('navAction', {foo: 'bar'})).to.have.length(1)
    })

    describe('the icon wrapper', function () {
      let $wrapper
      beforeEach(function () {
        $wrapper = $hook('na-iconWrapper', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($wrapper).to.have.class('nav-route-icon')
      })

      it('should be empty', function () {
        expect($wrapper.find('*')).to.have.length(0)
      })
    })

    describe('the icon', function () {
      let $icon
      beforeEach(function () {
        $icon = $hook('na-icon', {foo: 'bar'})
      })

      it('should not exist', function () {
        expect($icon).to.have.length(0)
      })
    })

    describe('the name', function () {
      let $name
      beforeEach(function () {
        $name = $hook('na-name', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($name).to.have.class('nav-route-name')
      })

      it('should have the proper text', function () {
        expect($name).to.have.text('Barry Allen')
      })
    })

    describe('the description', function () {
      let $description
      beforeEach(function () {
        $description = $hook('na-description', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($description).to.have.class('nav-route-description')
      })

      it('should have the proper text', function () {
        expect($description).to.have.text('The fastest man alive')
      })
    })

    describe('when clicked', function () {
      beforeEach(function () {
        $hook('navAction', {foo: 'bar'}).click()
      })

      it('should perform the action', function () {
        expect(frostNavigation.performAction).to.have.been.calledWith(item)
      })
    })
  })

  describe('when icon is given', function () {
    beforeEach(function () {
      item = {
        name: 'Barry Allen',
        description: 'The fastest man alive',
        icon: 'fizz-bang'
      }

      this.set('item', item)

      return wait()
    })

    it('should have the proper hook', function () {
      expect($hook('navAction', {foo: 'bar'})).to.have.length(1)
    })

    describe('the icon wrapper', function () {
      let $wrapper
      beforeEach(function () {
        $wrapper = $hook('na-iconWrapper', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($wrapper).to.have.class('nav-route-icon')
      })

      it('should includ an actual icon', function () {
        expect($wrapper.find('.frost-icon')).to.have.length(1)
      })
    })

    describe('the icon', function () {
      let $icon
      beforeEach(function () {
        $icon = $hook('na-icon', {foo: 'bar'})
      })

      it('should have proper class (using default frost icon pack)', function () {
        // NOTE: for some reason .to.have.class() doesn't work on svg elements (@job13er 2017-06-25)
        expect($icon.attr('class')).to.include('frost-icon-frost-fizz-bang')
      })

      describe('when an icon pack is given', function () {
        beforeEach(function () {
          item = {
            name: 'Barry Allen',
            description: 'The fastest man alive',
            icon: 'fizz-bang',
            pack: 'foo-bar'
          }

          this.set('item', item)
          return wait()
        })

        it('should have proper class (using the explicit icon pack)', function () {
          // NOTE: for some reason .to.have.class() doesn't work on svg elements (@job13er 2017-06-25)
          expect($icon.attr('class')).to.include('frost-icon-foo-bar-fizz-bang')
        })
      })
    })

    describe('the name', function () {
      let $name
      beforeEach(function () {
        $name = $hook('na-name', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($name).to.have.class('nav-route-name')
      })

      it('should have the proper text', function () {
        expect($name).to.have.text('Barry Allen')
      })
    })

    describe('the description', function () {
      let $description
      beforeEach(function () {
        $description = $hook('na-description', {foo: 'bar'})
      })

      it('should have the proper class', function () {
        expect($description).to.have.class('nav-route-description')
      })

      it('should have the proper text', function () {
        expect($description).to.have.text('The fastest man alive')
      })
    })

    describe('when clicked', function () {
      beforeEach(function () {
        $hook('navAction', {foo: 'bar'}).click()
      })

      it('should perform the action', function () {
        expect(frostNavigation.performAction).to.have.been.calledWith(item)
      })
    })
  })
})
