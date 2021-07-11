import './page-header.scss'

$(document).ready(() => {
  $('.page-header__btn-burger').click((event)=>{
    console.log();
    $(event.currentTarget).next().toggleClass('page-header__nav--active')
  })
});
