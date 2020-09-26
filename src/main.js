import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import vuex from 'vuex';
import '@mdi/font/css/materialdesignicons.css'


Vue.prototype.$appName = undefined
Vue.prototype.$useremail = undefined
Vue.prototype.$userpass = undefined
Vue.prototype.$userfname = undefined
Vue.prototype.$userlname = undefined
Vue.prototype.$usergroup = undefined
Vue.prototype.$userphone = undefined
Vue.prototype.$usergender = undefined

new Vue({
  el: '#app',
  router,
  vuetify,
  axios,
  vuex,
  render: h => h(App),
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  }
})
