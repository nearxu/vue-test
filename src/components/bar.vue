<template>
  <h2>{{ msg }}</h2>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'hello bar'
    }
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
