module.exports = [
  {
    id: 'demo',
    alias: 'Demo',
    type: 'route',
    route: 'demo',
    path: {
      path: '/'
    },
    modals: [{
        modalName: 'frost-navigation-modal',
        modal: {
          withParams: 'fiberplantNav',
          otherParams: {
            'fiberplantNavTemplate': 'navigationTemplate'
          },
          dialogClass: 'frost-navigation-modal',
          actions: {
            openRoute: 'openRoute'
          }
        }
      },
      {
        modalName: 'frost-navigation-modal',
        modal: {
          withParams: 'adminNav',
          otherParams: {
            'fiberplantNavTemplate': 'navigationTemplate'
          },
          dialogClass: 'frost-navigation-modal',
          actions: {
            openRoute: 'openRoute'
          }
        }
      }

    ],
    items: [
      {
        id: 'resource',
        alias: 'Resource',
        type: 'route',
        route: 'demo.resource'
},
      {
        id: 'dashboard',
        alias: 'Dashboard',
        type: 'route',
        route: 'demo.dashboard'
}
    ]
  }
]
