import {expect} from 'chai'
import {$hook, hook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('nav-category')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.setProperties({
      hook: 'cat',
      hookQualifiers: {fizz: 'bang'},
      icon: 'application',
      name: 'Category',
      pack: 'frost-nav',
      url: 'somewhere-else',
      tabbed: false
    })
  })

  describe('when no "url" is set', function () {
    beforeEach(function () {
      this.render(hbs`
        {{nav-category
          hook=hook
          hookQualifiers=hookQualifiers
          icon=icon
          name=name
          pack=pack
        }}
      `)

      return wait()
    })

    describe('an anchor', function () {
      let $anchor
      beforeEach(function () {
        $anchor = $hook('cat-link')
      })

      it('should not exist', function () {
        expect($anchor).to.have.length(0)
      })
    })

    describe('an icon', function () {
      let $icon, classNames
      beforeEach(function () {
        $icon = $hook('cat-icon', {fizz: 'bang'})

        // For some reason .to.have.class() doesn't work with svg elements (@job13er 2017-06-25)
        classNames = $icon.attr('class').split(' ')
      })

      it('should exist', function () {
        expect($icon).to.have.length(1)
      })

      it('should be a frost-icon', function () {
        expect(classNames).to.include('frost-icon')
      })

      it('should have proper pack/icon', function () {
        expect(classNames).to.include('frost-icon-frost-nav-application')
      })

      it('should have a parent with "nav-category-icon" class', function () {
        expect(this.$('.nav-category-icon')).to.have.descendants(hook('cat-icon', {fizz: 'bang'}))
      })
    })

    describe('the name', function () {
      let $name
      beforeEach(function () {
        $name = $hook('cat-name')
      })

      it('should exist', function () {
        expect($name).to.have.length(1)
      })

      it('should have the right class', function () {
        expect($name).to.have.class('nav-category-name')
      })

      it('should have the name', function () {
        expect($name).to.have.text('Category')
      })
    })
  })

  describe('when "url" is set', function () {
    beforeEach(function () {
      this.render(hbs`
        {{nav-category
          hook=hook
          hookQualifiers=hookQualifiers
          icon=icon
          name=name
          pack=pack
          url=url
          tabbed=tabbed
        }}
      `)

      return wait()
    })

    describe('an anchor', function () {
      let $anchor
      beforeEach(function () {
        $anchor = $hook('cat-link')
      })

      it('should exist', function () {
        expect($anchor).to.have.length(1)
      })

      it('should wrap the icon under content', function () {
        expect($anchor.find('.content')).to.have.descendants('.nav-category-icon')
      })

      it('should wrap the name under content', function () {
        expect($anchor.find('.content')).to.have.descendants('.nav-category-name')
      })

      it('should not set target to _blank', function () {
        expect($anchor).not.to.have.attr('target', '_blank')
      })

      it('should set proper href', function () {
        expect($anchor).to.have.attr('href', 'somewhere-else')
      })

      it('should have frost-link class', function () {
        expect($anchor).to.have.class('frost-link')
      })

      describe('when "tabbed" is set to true', function () {
        beforeEach(function () {
          this.set('tabbed', true)
          return wait()
        })

        it('should set target to _blank', function () {
          expect($anchor).to.have.attr('target', '_blank')
        })
      })
    })

    describe('an icon', function () {
      let $icon, classNames
      beforeEach(function () {
        $icon = $hook('cat-linkIcon', {fizz: 'bang'})

        // For some reason .to.have.class() doesn't work with svg elements (@job13er 2017-06-25)
        classNames = $icon.attr('class').split(' ')
      })

      it('should exist', function () {
        expect($icon).to.have.length(1)
      })

      it('should be a frost-icon', function () {
        expect(classNames).to.include('frost-icon')
      })

      it('should have proper pack/icon', function () {
        expect(classNames).to.include('frost-icon-frost-nav-application')
      })

      it('should have a parent with "nav-category-icon" class', function () {
        expect(this.$('.nav-category-icon')).to.have.descendants(hook('cat-linkIcon', {fizz: 'bang'}))
      })
    })

    describe('the name', function () {
      let $name
      beforeEach(function () {
        $name = $hook('cat-linkName')
      })

      it('should exist', function () {
        expect($name).to.have.length(1)
      })

      it('should have the right class', function () {
        expect($name).to.have.class('nav-category-name')
      })

      it('should have the name', function () {
        expect($name).to.have.text('Category')
      })
    })
  })
})
