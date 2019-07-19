<template>
  <div>
    <h2>{{ msg }}</h2>
    <v-bar1 :title="msg"></v-bar1>
  </div>
</template>

<script>
import Bar1 from './bar1'
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'hello bar'
    }
  },
  components: {
    'v-bar1': Bar1
  },
  created () {
    console.log('create bar')
  },
  mounted () {
    console.log('bar mounted')
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
