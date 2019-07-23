import AlertComponent from '@/components/model/alert'
import Vue from 'vue'

const alert = (msg, confirmSure = () => { }) => {
  const Constructor = Vue.extend(AlertComponent)
  let instance = new Constructor({
    el: document.createElement('div'),
    data () {
      return {
        message: msg,
        show: true
      }
    },
    methods: {
      confirmSure: confirmSure
    }
  })
  document.body.appendChild(instance.$el)
}

export default alert
