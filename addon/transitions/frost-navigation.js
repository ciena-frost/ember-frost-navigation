export default function () {
  let duration = 200
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
        duration
      }]
    }, {
      pick: '.lm-container',
      use: ['to-down', {
        duration
      }]
    }),
    this.reverse('explode', {
      pick: '.lf-overlay',
      use: ['cross-fade', {
        maxOpacity: 0.1,
        duration
      }]
    }, {
      pick: '.lm-container',
      use: ['to-up', {
        duration
      }]
    })
  )
  this.transition(
    this.hasClass('actionSlide'),
    this.toValue(true),
    this.use('toLeft', {duration}),
    this.reverse('toRight', {duration})
  )
}
