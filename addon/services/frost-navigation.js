import Ember from 'ember'

export default Ember.Service.extend({
  _registerMap: {
    category (config) {
      return this._registerCategory(config)
    },
    app (config) {
      return this._registerApp(config)
    }
  },
  register (config) {
    let self = this
    Ember.assert('Navigation Type must be specified', config.navType)
    return new Ember.RSVP.Promise(function (resolve, reject) {
      self._registerMap[config.navType].call(self, config)
        .then(resolve)
        .catch(reject)
    })
  },
  _registerCategory (config = {}) {
    let self = this
    return new Ember.RSVP.Promise(function (resolve, reject) {
      try {
        Ember.assert('Property \'name\' was not defined.', config.name)
      } catch (e) {
        reject(e)
      }
      self.categories.push({
        name: config.name,
        columns: config.columns || []
      })
      resolve(self)
    })
  },
  _registerApp (config = {}) {
    let self = this
    return new Ember.RSVP.Promise(function (resolve, reject) {
      try {
        let _category = self.categories.find(e => e.name === config.categoryName)
        Ember.assert(`Category ${_category} does not exist!`, _category)
        let _column = _category.columns.find(e => e.title === config.columnTitle)
        Ember.assert(`Column ${_column} does not exist!`, _column)
      } catch (e) {
        reject(e)
      }
      _column.push({
        icon: config.icon,
        name: config.name,
        description: config.description,
        route: config.route
      })
      resolve(self)
    })
  },
  activeCategory: null,
  categories: [{
    name: 'Network',
    columns: [
      [{
        title: 'Resources',
        color: '#009EEF',
        routes: [{
          icon: 'sample',
          name: 'Network elements',
          description: 'Description',
          route: 'demo.redesign.nested'
        }, {
          icon: 'sample',
          name: 'Equipment',
          description: 'Description',
          route: 'demo.redesign'
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
})
