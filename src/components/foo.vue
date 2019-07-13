<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-link :to="'/foo1'">foo1</router-link>
    <router-link :to="'/foo2'">foo2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'hello foo'
    }
  },
  computed: {
    username () {
      console.log(this.$route.params.username, 'params')
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
