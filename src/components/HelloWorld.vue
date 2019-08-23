<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-17 15:08:22
 * @LastEditTime: 2019-08-23 16:22:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="hello">
    <router-link to="/ani">Ani</router-link>
    <router-link to="/hoc">hoc</router-link>
    <router-link to="/scroll">scroll</router-link>
    <router-link to="/ws">ws</router-link>
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

    <vuex-component></vuex-component>

    <!-- <router-link to="/input">input</router-link> -->
    <!-- <router-link to="/form">form</router-link> -->
  </div>
</template>

<script>
import bar1 from './bar1'
import VuexComponent from '@/components/vuex-component.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      showMoveDot: [] // 控制下落的小圆点显示隐藏
    }
  },
  methods: {
    toggleAlert () {
      this.$model({ msg: 'hello', isShow: true }, bar1, () => {
        console.log('come herer')
        this.show = !this.show
      })
    },
    removeOutCart () {
      let elLeft = event.target.getBoundingClientRect().left
      let elBottom = event.target.getBoundingClientRect().bottom
      this.showMoveDot.push(true)
      this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom)
    }
  },
  components: {
    'vuex-component': VuexComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg {
  width: 100px;
  height: 100px;
  fill: #3190e8;
}
.cart_num {
  display: block;
  width: 100px;
  height: 100px;
}
.showReduce-enter-active,
.showReduce-leave-active {
  transition: all 0.3s ease-out;
}
.showReduce-enter,
.showReduce-leave-active {
  opacity: 0;
  transform: translateX(1rem);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fadeBounce-enter-active,
.fadeBounce-leave-active {
  transition: all 0.3s;
}
.fadeBounce-enter,
.fadeBounce-leave-active {
  opacity: 0;
  transform: scale(0.7);
}
</style>
