import {expect} from 'chai'
import {$hook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import wait from 'ember-test-helpers/wait'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('nav-route')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.render(hbs`
      {{nav-route
        hook='hook'
        hookQualifiers=(hash fizz='bang')
        icon=icon
        route=route
      }}
    `)
  })

  describe('when route is undefined', function () {
    beforeEach(function () {
      this.set('route', undefined)
      return wait()
    })

    describe('when icon not a path', function () {
      beforeEach(function () {
        this.set('icon', 'add')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', 'assets/icon-packs/frost.svg#add')
      })
    })

    describe('when icon is a path without an id', function () {
      beforeEach(function () {
        this.set('icon', '/my/icon/path')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', '/my/icon/path#root')
      })
    })

    describe('when icon is a path with an id', function () {
      beforeEach(function () {
        this.set('icon', '/my/icon/path#Layer_1')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', '/my/icon/path#Layer_1')
      })
    })
  })

  describe('when route is defined', function () {
    beforeEach(function () {
      this.set('route', 'test')
      return wait()
    })

    describe('when icon not a path', function () {
      beforeEach(function () {
        this.set('icon', 'add')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', 'assets/icon-packs/frost.svg#add')
      })
    })

    describe('when icon is a path without an id', function () {
      beforeEach(function () {
        this.set('icon', '/my/icon/path')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', '/my/icon/path#root')
      })
    })

    describe('when icon is a path with an id', function () {
      beforeEach(function () {
        this.set('icon', '/my/icon/path#Layer_1')
        return wait()
      })

      it('should have frost-icon class', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.attr('class').split(' ')).to.include('frost-icon')
      })

      it('should have the expected xlink:href', function () {
        const $icon = $hook('hook-link-icon', {fizz: 'bang'})
        expect($icon.find('use')).to.have.attr('xlink:href', '/my/icon/path#Layer_1')
      })
    })
  })
})
