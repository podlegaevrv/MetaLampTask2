import './masked-text-field.scss'
import 'jquery-mask-plugin/src/jquery.mask'

$(document).ready(() => {
  $('.masked-text-field').mask('00.00.0000', {placeholder: "ДД.ММ.ГГГГ"})
});
