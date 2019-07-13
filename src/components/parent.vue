<template>
  <div class="parent">
    <h1>hello parent</h1>
    <v-child :title="'props child title'"></v-child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'parent',
  created () {
    console.log('parent created1')
  },
  mounted () {
    console.log('parent mounted1')
  },
  components: {
    'v-child': Child
  }
}
</script>
