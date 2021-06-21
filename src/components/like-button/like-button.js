import './like-button.scss'

$(document).ready(()=>{
  $('.button-like').click(function() {
    $(this).toggleClass("liked");
  })
});
