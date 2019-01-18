// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'vue-awesome/icons'

/* Register component with one of 2 methods */
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('v-icon', Icon)

Vue.use(Vuetify, {
 iconfont: 'fa4',
 theme: {
  primary: '#363636',
  secondary: colors.grey.darken1,
  accent: colors.shades.black,
  error: colors.red.accent3
}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
