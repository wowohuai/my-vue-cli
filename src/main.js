import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import FastClick from 'fastclick';
import router from './router/router';
import store from './store';
import App from './App.vue';
import 'styles/reset.css';
import 'border.css';
import 'styles/iconfont.css';
import 'swiper/css/swiper.css'

FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
