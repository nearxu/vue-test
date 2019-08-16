<template>
  <div class="scroll-tab">
    <div class="tab-left">
      <ul>
        <li
          v-for="(tab, id) in tabs"
          :key="id"
          :class="activeIndex === id ? 'active' : ''"
          @click="toggleTab(tab, $event)"
        >
          <span>{{ tab }}</span>
        </li>
      </ul>
    </div>
    <div class="tab-right">
      <ul>
        <li v-for="(detail, index) in details" :key="index">
          <span>{{ detail.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/index'
export default {
  name: 'scroll',
  data () {
    return {
      list: Array.from({ length: 20 }).map((m, i) => {
        return {
          id: i,
          datas: [...new Array(10)].map((v, index) => {
            return {
              title: 'i m :' + i + ':' + index
            }
          })
        }
      }),
      tabs: [],
      details: [],
      activeIndex: 0
    }
  },
  mounted () {
    console.log(this.list)
    this.tabs = this.list.map(m => m.id)
    this.details = this.list.reduce((pre, cur) => pre.concat(cur.datas), [])
    console.log(this.details)
  },
  methods: {
    toggleTab: debounce(function (i, e) {
      console.log(i, 'asfsdf', e)
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
.scroll-tab {
  display: flex;
  overflow: hidden;
  .tab-left {
    width: 100px;
    height: 800px;
    overflow-y: scroll;
    display: block;
    ul {
      li {
        display: inline-block;
        width: 100%;
        line-height: 40px;
        border-bottom: 1px solid #e5e5e5;
      }
    }
  }
  .tab-right {
    flex: 1;
    height: 800px;
    overflow-y: scroll;
    ul {
      li {
        display: inline-block;
        width: 100%;
        line-height: 50px;
        border: 1px solid #e5e5e5;
      }
    }
  }
  .active {
    span {
      color: red;
    }
  }
}
</style>
