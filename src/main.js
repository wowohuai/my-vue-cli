import './style/common.styl'

new Promise((resolve) => {
  console.log('start')
  resolve(123)
}).then(res => console.log(res))

const el = document.getElementById('app');
const div = document.createElement('div');
div.classList.add('div');
el.appendChild(div);