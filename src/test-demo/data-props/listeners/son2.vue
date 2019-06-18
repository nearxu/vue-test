<template>
  <div>
    <p>boo: {{ boo }}</p>
    <p>son2 $attr {{ $attrs }}</p>
    <son3 v-bind="$attrs"></son3>
  </div>
</template>

<script>
import Son3 from './son3'
export default {
  components: {
    'son3': Son3
  },
  props: {
    boo: String
  },
  created () {
    console.log(this.$attrs)
  }
}
</script>
