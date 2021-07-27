
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './room-item.scss'
import 'slick-carousel/slick/slick.min'

$(document).ready(() => {
  $('.room-item__slider').slick({
    dots: true,
    arrows: true,
  })
});
