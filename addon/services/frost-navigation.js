import Ember from 'ember'

export default Ember.Service.extend({
  registerCategory (name, columns) {
    return !!this.categories.push({
      name,
      columns
    })
  },
  registerApp (categoryName, columnTitle, icon, name, description, path) {
    let _category = this.categories.find(e => e.name === categoryName)
    Ember.assert(`Category ${_category} does not exist!`, !_category)
    let _column = _category.columns.find(e => e.title === columnTitle)
    Ember.assert(`Column ${_column} does not exist!`, !_category)

    return !!_column.push({
      icon,
      name,
      description,
      path
    })
  },
  activeCategory: null,
  categories: [
    {
      name: 'Network',
      columns: [
        [
          {
            title: 'Resources',
            color: '#009EEF',
            routes: [
              {
                icon: 'sample',
                name: 'Network elements',
                description: 'Description',
                route: 'demo.redesign.nested'
              },
              {
                icon: 'sample',
                name: 'Equipment',
                description: 'Description',
                route: 'demo.redesign'
              },
              {
                icon: 'sample',
                name: 'Topology map',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Capacity map',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Fiber plant',
                description: 'Description'
              }
            ]
          }
        ],
        [
          {
            title: 'Services',
            color: '#359E35',
            routes: [
              {
                icon: 'sample',
                name: 'Packet services',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Packet infrastructure',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Photonic/OTN transport',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Links',
                description: 'Description'
              }
            ]
          }
        ],
        [
          {
            title: 'Troubleshooting',
            color: '#009999',
            routes: [
              {
                icon: 'sample',
                name: 'Alarm browser',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Performance metrics browser',
                description: 'Description'
              }
            ]
          },
          {
            title: 'Glanzer',
            color: '#009999',
            routes: [
              {
                icon: 'sample',
                name: 'Alarm browser',
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Performance metrics browser',
                description: 'Description'
              }
            ]
          }
        ]
      ]
    },
    {
      name: 'System',
      columns: []
    },
    {
      name: 'Planning',
      columns: []
    }
  ]
})
