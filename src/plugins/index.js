import Vue from 'vue'

import alert from './alert'
import model from './model'
import WebSocket from './ws'

// Vue.use(alert)

Vue.prototype.$alert = alert
Vue.prototype.$model = model
Vue.prototype.$ws = WebSocket
export default {
  install () {
    console.log('plug init')
  }
}
