<template>
  <div>
    >
    <h2>Grandson1</h2>
    <p>祖先元素提供的数据 : {{ title }}</p>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  inject: ['title'],
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.$on('dispatch', msg => {
      this.msg = 'dispatch data' + msg
    })
  }
}
</script>
