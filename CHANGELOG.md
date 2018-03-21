# 9.0.0 (2018-03-21)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.2`
* **Updated** `ember-frost-notifier` to `^8.0.0` 
* **Updated** `ember-frost-popover` to `^9.0.0`
* **Updated** `pr-bumper` to `^3.7.0`
* **Updated** `ember-prop-types` to `^7.0.1`
* **Updated** `ember-frost-core` to `^7.0.0`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 8.0.0 (2018-01-09)
* Remove `ember-cli-visual-acceptance` NPM devDependency
* Remove `ember-cli-deploy` and `ember-cli-deploy-frost-pack` NPM devDependencies
* Remove `frost-guide-custom-routing` NPM devDependency
* Remove `ember-concurrency` NPM devDependency
* Remove `ember-elsewhere` NPM devDependency
* Remove `ember-redux`, `redux`, and `redux-thunk` NPM devDependencies
* Remove `ember-spread` NPM devDependency
* Remove `ember-truth-helpers` NPM devDependency
* Remove `eslint` NPM devDependency
* Remove `eslint-config-frost-standard` NPM devDependency
* Remove `remark-cli` NPM devDependency
* Remove `remark-lint` NPM devDependency
* Remove `sass-lint` NPM devDependency
* Remove `ember-mocha` Bower dependency
* Remove `ember-mocha-adapter` Bower dependency
* Remove `sinonjs` Bower dependency
* Remove `ember-inflector` Bower dependency
* Remove `Faker` Bower dependency
* Remove `pretender` Bower dependency
* Remove `lodash` Bower dependency
* Remove _package-lock.json_ until officially support Node 8
* Remove useLintTree from ember-cli-mocha configuration
* Move `ember-hook` NPM devDependency to dependencies and pin to `1.4.2`
* Move `ember-cli-code-coverage` configuration file to correct location
* Downgrade and pin `liquid-fire` NPM dependency to `0.27.2`
* Downgrade and pin `ember-code-snippet` NPM devDependency to `1.7.0`
* Pin `ember-cli-code-coverage` NPM devDependency to `0.3.12`
* Upgrade `ember-browserify` to `^1.2.0`
* Upgrade `ember-frost-notifier` NPM devDependency to `^7.0.0`
* Upgrade `ember-frost-popover` NPM devDependency to `^8.0.0`
* Upgrade `ember-frost-core` NPM dependency to `^5.0.0`
* Upgrade `ember-frost-test` NPM devDependency to `^4.0.0`
* Upgrade and pin `ember-cli-sass` NPM dependency to `7.1.1`
* Upgrade and move `ember-prop-types` NPM devDependency to dependencies at `^6.0.1`
* Install `bower` NPM devDependency
* Install `ember-cli-frost-blueprints` NPM devDependency at `^5.0.1`
  

# 7.7.0 (2017-11-21)

* Added ability to specify category icons as urls, mirroring the functionality already implement for route icons.


# 7.6.1 (2017-11-20)
* #222 - Remove unused `typescript` dependency

# 7.6.0 (2017-11-13)

* Added ability to specify icon svgs with a URI instead of just a name and icon pack


# 7.5.7 (2017-11-13)
* #219 - Bind context to call of this._super.included() in index.js

# 7.5.6 (2017-10-26)
* Fixed a bug where clicking a nav-route targeting the current route would leave the modal open


# 7.5.5 (2017-08-10)
* **Updated** Upgrade ember-cli 2.12.3 inter-dependencies
* **Updated** pin `ember-cli-htmlbars-inline-precompile` per issue: https://github.com/ciena-frost/ember-frost-core/issues/488

# 7.5.4 (2017-07-25)
* **Added** code coverage check script to build
* **Updated** gh-pages publish of demo app script (demo app was not being published)

# 7.5.3 (2017-07-12)
* Upgrade to `ember-cli` 2.12.3

# 7.5.2 (2017-06-25)
* **Upgraded** `pr-bumper` to support pre-releases so we can create a `8.0-beta` branch. 


# 7.5.1 (2017-05-10)
* **Updated** secure auth tokens


# 7.5.0 (2017-04-11)
* **Added** some additional styles that were missing, as well as an example for a user menu
* **Fixed** [#30](https://github.com/ciena-frost/ember-frost-navigation/issues/30)
* **Fixed** [#32](https://github.com/ciena-frost/ember-frost-navigation/issues/32)

# 7.4.4 (2017-03-22)
 * **Fixed** [#204](https://github.com/ciena-frost/ember-frost-navigation/issues/204) finally 

# 7.4.3 (2017-03-22)
 * **Added** a guard against `frost-navigation` service being destroyed when timeout finishes (attempting to fix [#204](https://github.com/ciena-frost/ember-frost-navigation/issues/204)) 

# 7.4.2 (2017-03-21)
- Only register routes if supported by version


# 7.4.1 (2017-03-21)
* **Fixed** bug where destroyed component tried to update `frost-navigation` service


# 7.4.0 (2017-03-16)
* **Added** ability to set a `url` on a category and let it link directly to an external site
* **Fixed** the demo (was throwing an error due to re-defining the `demo.loading` route)
* **Updated** lint rules and cleaned up code
* **Fixed** unit tests to use `ember-test-utils` helpers and actually test some things
* **Integrated** `pr-bumper` code coverage management. 

# 7.3.0
- Update dependencies
   - Biproduct of running the generators
- Added hooks 
- Switched from ember-cli-notifications to frost-notifier
- outsideClick handler to dismiss outlet
- fix delay to prevent broken transition (transition would start before next would end)
- remove ember-elsewhere, and move nav-modal into frost-navigation template
- nav-modal-outlet deprecated. It will now print deprecated message

# 7.2.1
* **Updated** to use latest pr-bumper which supports being able to set a PR to `none` when publishing a new version is not desired.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-frost/ember-frost-navigation/197)
<!-- Reviewable:end -->


# 7.2.0
* **Updated** integration/unit tests to remove the deprecated use of `describeComponent()`
* **Updated** unit tests to remove the deprecated use of `describeModule()`
* **Added** ember-test-utils dependency for usage in testing

# 7.1.0
- Changes to css to show active state provided by link-to
- Add property `params`, of type hash that abuses ember's LinkTo Components way of parsing query params to allow for
dynamic query parameters.



# 7.0.0
Please add a description of your change here, it will be automatically prepended to the `CHANGELOG.md` file.


# 6.1.0
* Add app icons

# 6.0.5
**fixed** build by pinning ember-cli-code-coverage to 0.3.5



# 6.0.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 6.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 6.0.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 6.0.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 6.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.0.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.0.4
- Removed blanket.js
- Added codecoverage

# 5.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.0.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.0.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 4.0.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 4.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 3.0.1
- Ability to add inline 'actions'
- Added ember block slots to blueprint


Usage:

```
this.action('Action 1', {
  action: 'myAction',
  pack: 'dummy',
  icon: 'sample',
  description: 'My description',
  inline: true
})
```

Where `inline: true` would determine whether it gets rendered in the actions tab or with the other apps.

# 3.0.0

Upgraded to `ember-block-slots` 1.0 and adjusted the interface for the logo and actions

# 2.1.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.1.3
 - No assertion on duplicate categories
     - When service checks to see if category exists, will either use pre-existing, or create one.
 - `this.link`
    - `this.app` will register against RouterDSL. For the case that a route already exists, and you just want to
    link to it, you can use `this.link('lorem', {route:'foobar'})`

# 2.1.2
 - No assertion on duplicate categories
     - When service checks to see if category exists, will either use pre-existing, or create one.
 - `this.link`
    - `this.app` will register against RouterDSL. For the case that a route already exists, and you just want to link
    to it, you can use `this.link('lorem', {route:'foobar'})`

# 2.1.1
- Blog Engine has been upped to show ember-engines integration in dummy app

# 2.1.0

Updated README.md
Changed action to trigger action handler in controller
Gracefully falls back to method being a controller attr
Added font-awesome for demo app notifications
Special clicks (Shift, Ctrl, CMD) will follow its intended behaviour.

# 2.0.8
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.7
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.6
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.5
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.4
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.0

See the README for information on how to use the new navigation system.  Visual redesign and support
for engines included.

