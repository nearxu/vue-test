<template>
  <div>
    <h1>hello form</h1>
    <k-input v-model="username"></k-input>
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
  },
  mounted () {
    this.$on('dispatch', msg => {
      this.msg = msg
    })
  }

}
</script>

<style>
</style>
