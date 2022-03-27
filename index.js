// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
import store from './store';

// set the start locale to use
//Vue.i18n.set('en'); // set in app based on state

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
