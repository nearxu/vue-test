import Vue from 'vue'

import alert from './alert'
import model from './model'

// Vue.use(alert)

Vue.prototype.$alert = alert
Vue.prototype.$model = model
export default {
  install () {
    console.log('plug init')
  }
}
