import './page-header.scss'

$(document).ready(() => {
  $('.page-header__btn-burger').click((event)=>{
    $(event.currentTarget).toggleClass('page-header__btn-burger--active')
    $(event.currentTarget).next().toggleClass('page-header__nav--active')
  })
});
