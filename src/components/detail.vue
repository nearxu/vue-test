<template>
  <h2>{{ msg }} {{ $route.params.id }}</h2>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'hello detail'
    }
  },
  mounted () {
    console.log(this.$route.query.status)
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
