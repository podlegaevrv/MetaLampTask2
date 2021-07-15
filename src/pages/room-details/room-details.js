import './room-details.scss'

import Chart from 'chart.js/auto';

const labels = [
  'Разачарован',
  'Удовлетворительно',
  'Хорошо',
  'Великолепно',
];

let ctx = document.getElementById('my-chart').getContext('2d');
let gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
gradient1.addColorStop(0, '#FFE39C');
gradient1.addColorStop(1, '#FFBA9C');
let gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
gradient2.addColorStop(0, '#BC9CFF');
gradient2.addColorStop(1, '#8BA4F9');
let gradient3 = ctx.createLinearGradient(0, 0, 0, 300);
gradient3.addColorStop(0, '#6FCF97');
gradient3.addColorStop(1, '#66D2EA');
let gradient4 = ctx.createLinearGradient(0, 0, 0, 300);
gradient4.addColorStop(0, '#909090');
gradient4.addColorStop(1, '#3D4975');

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [gradient1,gradient3, gradient2,gradient4].reverse(),
    data: [130, 65, 65, 0].reverse(),
  }]
};

Chart.register({
  id: 'custom_text',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
    let centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.save();
    ctx.font = "bold 24px Montserrat"
    ctx.fillStyle = "#BC9CFF"
    ctx.fillText('260', centerX, centerY-10)
    ctx.font = "bold 14px Montserrat"
    ctx.fillText('голосов', centerX, centerY+10)
    ctx.restore();
  }
});



const config = {
  type: 'doughnut',
  data,
  options: {
    responsive: true,
    cutout: '90%',
    layout: {
      padding: {
        bottom: 225,
        right: 40
      }
    },
    plugins: {
      custom_text: true,
      legend: {
        maxWidth: 220,
        align: 'end',
        labels:{
          usePointStyle: true,
          font: {
            size: 14,
            family: 'Montserrat',
            lineHeight: 24
          },
        },
        reverse: true,
        position: 'right',
      }
    }
  },

};

let myChart = new Chart(
  document.getElementById('my-chart'),
  config
)

