<template>
  <div class="dialog" v-if="isShow">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="dialog-content" v-if="isShow">
        <div class="dialog_head back">
          <!--弹窗头部 title-->
          <slot name="header">提示信息</slot>
        </div>
        <div class="dialog_main">
          <!--弹窗的内容-->
          <slot name="main">弹窗内容</slot>
        </div>
        <!--弹窗关闭按钮-->
        <div class="foot_close" @click="closeMyself">
          <div class="close_img back">X</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'model',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('onClose')
    }
  }
}
</script>
<style lang="scss" scoped>
// 最外层 设置position定位
.dialog {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #2e2c2d;
  font-size: 16px;
  z-index: 10;
}
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.dialog-cover {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
// 内容层 z-index要比遮罩大，否则会被遮盖，
.dialog-content {
  position: absolute;
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
  .dialog_head {
    // 头部title的背景 居中圆角等属性。
    // 没有图片就把background-image注释掉
    // background-image: url("../../static/gulpMin/image/dialog/dialog_head.png");
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .dialog_main {
    // 主体内容样式设置
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 22px 0 47px 0;
  }
  .foot_close {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: -25px;
    .close_img {
      // background-image: url("../../static/gulpMin/image/dialog/dialog_close.png");
      width: 42px;
      height: 42px;
    }
  }
}
</style>
