<template>
  <div>
    <p>foo: {{ foo }}</p>
    <p>son1 $attr {{ $attrs }}</p>
    <son2 v-bind="$attrs"></son2>
  </div>
</template>

<script>
import Son2 from './son2'
export default {
  components: {
    'son2': Son2
  },
  props: {
    foo: String
  },
  created () {
    console.log(this.$attrs)
  }
}
</script>
