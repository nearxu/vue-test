import ModelComponent from '@/components/model/index'
import Vue from 'vue'

// let instance
// const constructor = Vue.extend(ModelComponent)
// const model = options => {
//   options = options || {}
//   instance = new constructor({
//     data: options
//   })
//   instance.vm = instance.$mount()
//   instance.dom = instance.vm.$el
//   document.body.appendChild(instance.dom)
//   return instance.vm
// }

let model = (options, onClose = () => { }) => {
  const constructor = Vue.extend(ModelComponent)

  let instance = new constructor({
    data: options,
    methods: {
      onClose: onClose
    }
  })
  instance.vm = instance.$mount()
  instance.dom = instance.vm.$el
  // instance.$children.push(comps)
  document.body.appendChild(instance.dom)
  return instance.vm
}

export default model
