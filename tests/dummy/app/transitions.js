// import { animate, Promise } from "liquid-fire";

export default function () {
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('frost-navigation-modal'),
    this.toValue(true),
    this.use('explode',
      {pick: '.lf-overlay', use: ['cross-fade', {maxOpacity: 0.1, duration: 200}]},
      {pick: '.lm-container', use: ['to-down', {duration: 200}]}
    ),
    this.reverse('explode',
      {pick: '.lf-overlay', use: ['cross-fade', {maxOpacity: 0.1, duration: 200}]},
      {pick: '.lm-container', use: ['to-up', {duration: 200}]}
    )
  )
}
