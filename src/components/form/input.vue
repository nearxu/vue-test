<template>
  <input :type="type" @blur="onBlur" :value="value" @input="onInput" />
</template>

<script>
export default {
  name: 'KInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onBlur () {
      this.$dispatch('validate')
    },
    onInput (e) {
      this.$emit('input', e.target.value)
      this.$dispatch('validate')
    }
  }
}
</script>

<style>
</style>
