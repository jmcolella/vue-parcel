import Vue from 'vue';
import App from './app/index.vue';

import './app/assets/styles/global.css';

new Vue({ render: createElement => createElement(App) }).$mount('#app');

if (module.hot) {
  module.hot.accept();
}