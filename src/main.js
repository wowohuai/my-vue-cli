// new Promise((resolve) => {
//   console.log('start')
//   resolve(123)
// }).then(res => console.log(res))

// const el = document.getElementById('app');
// const div = document.createElement('div');
// div.classList.add('div');
// el.appendChild(div);
import '~/style/common.styl'
import Icon from './main.jpg';
import counter from '~/counter'
import number from './number'
counter()
number()

if (module.hot) {
  module.hot.accept('./number', () => {
    number();
  })
}

// 将图像添加到我们已经存在的 div 中。

var myIcon = new Image();
myIcon.src = Icon;
document.body.appendChild(myIcon)