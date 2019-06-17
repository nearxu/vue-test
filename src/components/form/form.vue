<template>
  <div>
    <h1>hello form</h1>
    <k-input v-modal="username"></k-input>
  </div>
</template>

<script>
import KInput from './input'

export default {
  name: 'k-form',
  data () {
    return {
      username: 'username'
    }
  },
  components: {
    KInput
  }

}
</script>

<style>
</style>
