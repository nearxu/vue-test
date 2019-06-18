<template>
  <div>
    <son ref="sonRef"></son>
  </div>
</template>

<script>
import Son from './son'

export default {
  components: { Son },
  mounted () {
    const sons = this.$refs.sonRef
    console.log(sons.title)
    sons.sayHello()
  }
}
</script>
