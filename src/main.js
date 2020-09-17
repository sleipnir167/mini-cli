import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'bootstrap/dist/css/bootstrap.css' // add
// import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.config.productionTip = false


// firebase用 >>>
// import Login from './views/Login'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDbaVTETBeLgzfed4VFs9VVPypP2MZ-mtY",
  authDomain: "vue-authentication-ac53f.firebaseapp.com",
  databaseURL: "https://vue-authentication-ac53f.firebaseio.com",
  projectId: "vue-authentication-ac53f",
  storageBucket: "vue-authentication-ac53f.appspot.com",
  messagingSenderId: "633224124755",
}
firebase.initializeApp(config);

// /* eslint-disable no-new */
// new Vue({
//   el: '#Login2',
//   router,
//   template: '<Login/>',
//   components: { Login }
// })

// <<< firebase用 



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


