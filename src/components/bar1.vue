<template>
  <div>{{ title | trans }}</div>
</template>

<script>
export default {
  name: 'bar1',
  props: ['title'],
  filters: {
    trans (val) {
      return val.split('*')
    }
  },
  created () {
    console.log('bar1 create')
  },
  mounted () {
    console.log('bar1 mounted')
  }
}
</script>
<style>
</style>
