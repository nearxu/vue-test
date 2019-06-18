<template>
  <div>
    <label for="">{{ label }}</label>
    <slot></slot>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: ['label', 'props'],
  data () {
    return {
      error: ''
    }
  }
}
</script>

<style>
</style>
