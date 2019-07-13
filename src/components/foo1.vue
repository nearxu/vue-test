<template>
  <div>
    hello foo1
    <v-parent></v-parent>
  </div>
</template>

<script>
import Parent from './parent'

export default {
  name: 'foo1',
  components: {
    'v-parent': Parent
  }
}
</script>
