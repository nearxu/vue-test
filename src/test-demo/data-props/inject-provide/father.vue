<template>
  <div>
    <h1>hello father</h1>
    <v-son></v-son>
  </div>
</template>

<script>
import VSon from './son'

export default {
  name: 'father',
  provide () {
    return {
      dataProps: 'this'
    }
  },
  components: { VSon }
}
</script>

<style>
</style>
