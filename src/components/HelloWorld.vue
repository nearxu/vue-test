<template>
  <div class="hello">
    <h1>
      <button @click="toggleAlert">alert component from body</button>
    </h1>
    <h2>
      <transition name="showReduce">
        <span @click="removeOutCart()">
          321
        </span>
      </transition>

      <transition name="fade">
        <span class="cart_num">123</span>
      </transition>
    </h2>
    <parent></parent>
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
    <!-- <router-link to="/input">input</router-link> -->
    <!-- <router-link to="/form">form</router-link> -->
  </div>
</template>

<script>
import bar1 from './bar1'
import Parent from './destroyed/parent'
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
      // this.$alert('hello msg from body', () => {
      //   console.log('alert success')
      // })
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
    'Parent': Parent
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
