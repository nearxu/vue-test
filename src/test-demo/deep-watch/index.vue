<template>
  <div>
    <p>fullname: {{ fullName }}</p>
    <p>firstname: <input type="text" v-model="firstName" /></p>

    <h2>immediate :true 首次也会执行</h2>

    <h3>deep 属性</h3>
    <p>obj.a : {{ obj.a }}</p>
    <p>obj.a: <input type="text" v-model="obj.a" /></p>
  </div>
</template>

<script>
export default {
  name: 'DeepName',
  data () {
    return {
      firstName: 'tom',
      lastName: 'marry',
      fullName: '',
      obj: {
        a: 123
      }
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      handler (newName, oldName) {
        console.log('obj.a change')
      },
      immediate: true
    }
  }
}
</script>
<style>
</style>
