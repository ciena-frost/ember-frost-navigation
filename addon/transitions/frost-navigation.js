
export default function () {
  let duration = 200
  this.transition(
      this.toValue(true),
      this.use('explode', {
        pick: '.nav-modal',
        use: ['to-down', {duration}]
      }, {
        pick: '.frost-navigation-background',
        use: 'fade'
      }),
      this.reverse('explode', {
        pick: '.nav-modal',
        use: ['to-up', {duration}]
      }, {
        pick: '.frost-navigation-background',
        use: 'fade'
      }),
    )
  this.transition(
    this.hasClass('actionSlide'),
    this.toValue(true),
    this.use('toLeft', {duration}),
    this.reverse('toRight', {duration})
  )
}
