<template>
  <div class="child">
    <h1>hello child</h1>
  </div>
</template>
<script>
export default {
  name: 'child',
  props: ['title'],
  created () {
    console.log('child title', this.title)
    console.log('child created')
  },
  mounted () {
    console.log('child mounted')
  }
}
</script>
