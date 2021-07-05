import noUiSlider from "nouislider/dist/nouislider.min";
import wNumb from 'wnumb/wNumb.min'
import 'nouislider/dist/nouislider.min.css'
import './range-slider.scss'

let rangeSlider = document.getElementById('range-slider');
let rangeSliderValue = document.getElementById('range-slider-value')

if (rangeSlider){
  noUiSlider.create(rangeSlider,{
    start: [5000, 10000],
    connect: true,
    step: 1000,
    range: {
      'min': [0],
      'max': [15000]
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '₽'
    })
  });

  rangeSlider.noUiSlider.on('update', function (values){
    rangeSliderValue.innerHTML = values.join(' - ');
  });
}


