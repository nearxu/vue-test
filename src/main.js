// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// vue on and emit
Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  while (parent) {
    if (parent) {
      parent.$emit(eventName, data)
      parent = parent.$parent
    } else {
      break
    }
  }
}

Vue.prototype.$boardcast = function (eventName, data) {
  boardcast.call(this, eventName, data)
}
function boardcast (eventName, data) {
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data)
    if (child.$children.length) {
      // 递归调用，通过call修改this指向 child
      boardcast.call(child, eventName, data)
    }
  })
}

class Bus {
  constructor () {
    this.callbacks = {}
  }
  $on (name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit (name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => cb(args))
    }
  }
}

Vue.prototype.$bus = new Bus()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
