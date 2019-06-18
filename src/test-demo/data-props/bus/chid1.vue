<template>
  <div>
    <h2>Child1</h2>
    <p>{{ title }}</p>
    <h3>{{ msg }}</h3>
    <button @click="toParent">传递到父元素</button>
    <button @click="$boardcast('boardcast', '我是Child1')">广播子元素</button>
    <grand-child1></grand-child1>
  </div>
</template>

<script>
import GrandChild1 from './grand-child1'
export default {
  inject: ['title'],
  components: {
    'grand-child1': GrandChild1
  },
  methods: {
    toParent () {
      this.$emit('getmsg', 'dad,i know that')
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log(this.$bus, 'bus')
    this.$bus.$on('event-bus', msg => {
      this.msg = 'event-bus:' + msg
    })
  }
}
</script>
