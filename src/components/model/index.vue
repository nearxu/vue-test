<template>
  <div class="dialog">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="dialog-content" v-if="isShow">
        <h1>{{ msg }}</h1>
        <slot name="main"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    closeMyself () {
      this.show = false
      this.$el.remove()
      this.onClose()
    }
  }
}
</script>
<style lang="scss" scoped>
// 最外层 设置position定位
.dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 16px;
}
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.dialog-cover {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
// 内容层 z-index要比遮罩大，否则会被遮盖，
.dialog-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 移动端使用felx布局
  display: flex;
  width: 300px;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
  border-radius: 10px;
}
</style>
