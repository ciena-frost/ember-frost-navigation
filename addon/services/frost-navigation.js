import Ember from 'ember';

export default Ember.Service.extend({
  activeCategory: 'network',
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
                description: 'Description'
              },
              {
                icon: 'sample',
                name: 'Equipment',
                description: 'Description'
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
});