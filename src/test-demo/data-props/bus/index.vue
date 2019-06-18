<template>
  <div id="app">
    <h2>parent</h2>
    <h3>{{ msg }}</h3>
    <child1 :title="title1" @getmsg="getmsg"></child1>
  </div>
</template>

<script>
import Child1 from './chid1'

export default {
  name: 'bus',
  provide: {
    title: 'hello, my is provide props data'
  },
  data () {
    return {
      msg: ' ',
      title1: 'my is father'
    }
  },
  components: {
    'child1': Child1
  },
  methods: {
    getmsg (msg) {
      this.msg = msg
    }
  },
  mounted () {
    this.$bus.$on('event-bus', msg => {
      this.msg = 'event-bus' + msg
    })
  }
}
</script>
