import './expandable-checkbox-list.scss'

$(document).ready(() => {
  $('.expandable-checkbox-list-box__btn').click(function (event){
    event.preventDefault();
    console.log($(this));
    $(this).toggleClass('expandable-checkbox-list-box__btn--open');
    $(this).next('.expandable-checkbox-list').toggleClass('show');
  })
});
