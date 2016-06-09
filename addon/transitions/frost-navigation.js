export default function () {
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('nav-modal'),
    this.toValue(function (e) {
      return e.get('params').activeCategory
    }),
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
    }),
    this.debug()
  )

}
