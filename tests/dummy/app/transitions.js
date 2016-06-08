// import { animate, Promise } from "liquid-fire";

export default function() {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.nav-modal',
      use: ['to-down', {
        duration: 500
      }]
    }),
    this.reverse('explode', {
      pick: '.nav-modal',
      use: ['to-up', {
        duration: 200
      }]
    }),
    this.debug()
  )
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('frost-navigation-modal'),
    this.toValue(true),
    this.use('explode', {
      pick: '.lf-overlay',
      use: ['cross-fade', {
        maxOpacity: 0.1,
        duration: 200
      }]
    }, {
      pick: '.lm-container',
      use: ['to-down', {
        duration: 200
      }]
    }),
    this.reverse('explode', {
      pick: '.lf-overlay',
      use: ['cross-fade', {
        maxOpacity: 0.1,
        duration: 200
      }]
    }, {
      pick: '.lm-container',
      use: ['to-up', {
        duration: 200
      }]
    })
  )
  this.transition(
    this.hasClass('nav-item'),
    this.includingInitialRender(),
    this.use('explode', {
      use: ['flyTo', {
        duration: 100
      }]
    }, {
      use: ['toLeft', {
        duration: 100
      }]
    }),
    this.reverse('explode', {
      use: ['flyTo', {
        duration: 100
      }]
    }, {
      use: ['toRight', {
        duration: 100
      }]
    }),
    this.debug()
  )
}
