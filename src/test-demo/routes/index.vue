<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item.id">
        <router-link :to="{ name: 'tab-detail', params: { id: item.id } }"
          >tab-{{ item.id }}</router-link
        >
        <!-- <button @click="toggle(item.id)">tab{{ item.id }}</button> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        { id: 1, content: 'hello content 1!' },
        { id: 2, content: 'hello content 12!' },
        { id: 3, content: 'hello content 13!' }
      ]
    }
  },
  methods: {
    toggle (ids) {
      console.log(ids)
      this.$router.push({ name: 'tab-detail', params: { id: ids } })
    }
  },
  mounted () {
    this.$router.push({ name: 'tab-detail', params: { id: 1 } })
  }

}
</script>
