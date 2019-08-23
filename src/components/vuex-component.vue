<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:14:54
 * @LastEditTime: 2019-08-23 17:48:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="vue-component">
    <p>
      <span v-for="(v, i) in listIor" :key="i"> --{{ v }}-- </span>
    </p>
    <!-- <p>
      <button @click="toggle">toggle</button>
    </p> -->
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="toggle(item, index)"
      >
        toggle{{ index }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'vuex-component',
  data () {
    return {
      lists: [
        { id: 0 },
        { id: 0 },
        { id: 0 }
      ],
      ids: null
    }
  },
  computed: {
    ...mapState(['listIor'])
  },
  methods: {
    toggle (item, index) {
      if (index !== this.ids) {
        this.$store.dispatch('addList', index)
        this.ids = index
      }
    }
  }
}
</script>
