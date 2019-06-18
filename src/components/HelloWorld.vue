<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-link to="/list">list</router-link>
    <router-link to="/data">data</router-link>
    <router-link to="/slot">slot</router-link>
    <router-link to="/deep-watch">deep watch</router-link>
    <router-link
      :to="{ name: 'detail', params: { id: '123' }, query: { status: '123' } }"
      >detail</router-link
    >
    <router-link to="/tab">tab</router-link>
    <!-- <router-link to="/input">input</router-link> -->
    <!-- <router-link to="/form">form</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
