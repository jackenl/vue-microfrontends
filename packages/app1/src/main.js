import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import appRouter from './router';

Vue.config.productionTip = false;

// import css
import './assets/var.css';

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = appRouter;

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

window.appName = 'app1'

if (!window.__MICRO_APP__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}