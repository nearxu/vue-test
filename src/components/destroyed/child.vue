<template>
  <div class="child" v-if="show">
    hello child
    <div>hello destroyed</div>
  </div>
</template>
<script>
export default {
  name: 'child',
  props: ['show'],
  mounted () {
    console.log(this.show, 'showw')
    console.log('mounted child')
  },
  destroyed () {
    console.log('destorys child')
  }
}
</script>
