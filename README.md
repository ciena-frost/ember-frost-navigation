[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-navigation.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-navigation

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-navigation.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-navigation

[npm-img]: https://img.shields.io/npm/v/ember-frost-navigation.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-navigation

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-navigation

Navigation made easy. Makes use of liquid fire and the `RouterDSL` prototype to make a clean and concise way of creating, and navigating routes.

Also supports [ember-engines](https://github.com/dgeb/ember-engines)

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Development](#development)

## Installation
```
ember install ember-frost-navigation
```

## Examples

[](assets/ex1.gif)

Running `ember serve` from the context of the addon will serve a dummy application as example.

Usage will mainly take place in `app/router.js`

```js
this.nav('demo.redesign', {
  categories: routerConfig.categories
}, function (nav) {
  this.category('category1', {}, function () {
    this.column('column1', {
      color: 'green'
    }, function () {
      this.app('app1', {
        description: 'description1',
        icon: 'sample'
      })
      this.section('section1', function (){
        this.action('action1', {
          action: 'doThis'
        })
        this.app('app2')
      })
    })
    this.column('column2')
  })
})
```

## Documentation

`this.nav(String controllerName, Object config, Function callback)`

Provide the name of the controller, the options for its configuration,
and a callback to nest navigation properties.

| Property    | Description                                                                                                                                                                                                                  |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| model       | Renders the template to match the array, but will *not* initialize the engines or routes. Recommended if you already have your routing completed, and just want to use this component as a navigation tool.                  |
| dialogClass | An optional additional CSS class to put on the lf-dialog element. This lets you style the containing box differently for different modals.                                                                                   |
| actions     | Wire up actions from the modal component's sendAction to your app. For example, `actions: {submit: "modalSubmitted"}` will trigger the `modalSubmitted` event on your controller when a submit event is fired in your modal. |

`this.category(String categoryName, Object config, Function callback)`

Creates a navigation drop-down by the name `categoryName`, with properties configured by the `config` object, and function `callback` to register `app`'s, `action`'s, and `section`'s

| Property | Description                         |
|----------|-------------------------------------|
| model  | Array of columns for given category |

`this.column(String columnName, Object config, Function callback)`

Creates a column listed under the parent `category`

| Property | Description                               |
|----------|-------------------------------------------|
| color    | Color of the title line                   |
| routes   | An array of routes that can be passed in  |
| actions  | An array of actions that can be passed in |

`this.section(String columnName, Object config, Function callback)`

In terms of usage works the same as a column, but appears under a column. Section must be created within the context of a column.

| Property | Description                               |
|----------|-------------------------------------------|
| color    | Color of the title line                   |
| routes   | An array of routes that can be passed in  |
| actions  | An array of actions that can be passed in |

`this.app(String appName, Object config, Function callback)`

Creates a route / engine against the `RouterDSL`. Must be created within the context of a `column` or `section`.

| Property    | Description                                 |
|-------------|---------------------------------------------|
| icon        | Create the app with an icon                 |
| description | Text that describes the app                 |
| route       | Route name for your routable engine / route |

`this.action(String actionName, Object config, Function callback)`

| Property    | Description                                                                      |
|-------------|----------------------------------------------------------------------------------|
| icon        | Create the action with an icon                                                   |
| description | Text that describes the action                                                   |
| action      | String that references parent controller for a method to execute on action click |
| dismiss     | Boolean flag to dismiss the navigation modal on action complete                  |


### Example Schema
```js
[{
  name: 'Network',
  columns: [
    [{
      title: 'Resources',
      color: '#009EEF',
      routes: [{
        icon: 'sample',
        name: 'Network elements',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Equipment',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Topology map',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Capacity map',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Fiber plant',
        description: 'Description'
      }]
    }],
    [{
      title: 'Services',
      color: '#359E35',
      routes: [{
        icon: 'sample',
        name: 'Packet services',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Packet infrastructure',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Photonic/OTN transport',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Links',
        description: 'Description'
      }]
    }],
    [{
      title: 'Troubleshooting',
      color: '#009999',
      routes: [{
        icon: 'sample',
        name: 'Alarm browser',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Performance metrics browser',
        description: 'Description'
      }]
    }, {
      title: 'Glanzer',
      color: '#009999',
      routes: [{
        icon: 'sample',
        name: 'Alarm browser',
        description: 'Description'
      }, {
        icon: 'sample',
        name: 'Performance metrics browser',
        description: 'Description'
      }]
    }]
  ]
}, {
  name: 'System',
  columns: []
}, {
  name: 'Planning',
  columns: []
}]
```
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-navigation.git
cd ember-frost-navigation
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-navigation/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
