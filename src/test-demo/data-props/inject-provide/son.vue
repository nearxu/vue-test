<template>
  <div>
    <h1>hello son</h1>
    <h2>this is provide inject data {{ dataProps }}</h2>
  </div>
</template>

<script>
export default {
  name: 'son',
  inject: ['dataProps']
}
</script>

<style>
</style>
