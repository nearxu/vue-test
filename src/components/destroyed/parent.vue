<template>
  <div class="parent">
    <button @click="toggle">toggle</button>
    <v-child :show="show"></v-child>
  </div>
</template>

<script>
import Child11 from './child'
export default {
  name: 'parent',
  data () {
    return {
      show: false
    }
  },
  components: {
    'v-child': Child11
  },
  methods: {
    toggle () {
      this.show = !this.show
      console.log(this.show, 'show')
    }
  }
}
</script>
