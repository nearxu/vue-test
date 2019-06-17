<template>
  <div>
    <h2>{{ msg }}</h2>
    <ul>
      <li v-for="(item, index) in lists" v-bind:key="index">
        <router-link :to="{ name: 'detail', params: { id: index } }"
          >list detail {{ index }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'hello list',
      lists: [
        { text: 'list1' },
        { text: 'list2' },
        { text: 'list3' },
        { text: 'list4' }
      ]
    }
  }
}
</script>

<style>
h2 {
  color: red;
}
</style>
