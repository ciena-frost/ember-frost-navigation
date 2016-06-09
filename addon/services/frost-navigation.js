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
    Ember.assert('Navigation Type must be specified', config.navType)
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._registerMap[config.navType].call(this, config)
        .then(resolve)
        .catch(reject)
    })
  },
  _registerCategory (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      try {
        Ember.assert('Property \'name\' was not defined.', config.name)
      } catch (e) {
        reject(e)
      }
      this.categories.push({
        name: config.name,
        columns: config.columns || []
      })
      if (config.as) {
        this._registerApp({
          categoryName: config.name,
          columnTitle: config.columnTitle,
          name: config.as,
          icon: config.icon,
          color: config.color,
          description: config.description || 'Default description',
          route: config.as
        }).then(resolve).catch(reject)
      } else {
        resolve(this)
      }
    })
  },
  _registerApp (config = {}) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      try {
        let _category = this.categories.find(e => e.name === config.categoryName)
        Ember.assert(`Category ${_category} does not exist!`, _category)
        let section = _category.columns.forEach(function (row) {
          section = row.find(e => e.title === config.columnTitle)
        })
        if (!section) {
          _category.columns.push([section = {
            title: config.columnTitle || 'default',
            color: config.color || '#009EEF',
            routes: []
          }])
        }
        section.routes.push({
          icon: config.icon,
          name: config.name,
          description: config.description,
          route: config.route
        })
      } catch (e) {
        reject(e)
      }
      resolve(this)
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
})
