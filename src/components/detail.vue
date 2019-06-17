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
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
