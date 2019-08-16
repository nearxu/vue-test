<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:18:54
 * @LastEditTime: 2019-08-16 10:28:29
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div class="ani">
    <p>
      <button @click="toggle">toggle</button>
    </p>
    <div class="position">
      <div class="icon-car-count" :class="ised ? 'count-ani' : ''">13</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ani',
  data () {
    return {
      ised: false
    }
  },
  methods: {
    toggle () {
      this.ised = !this.ised
    }
  }
}
</script>

<style lange="scss">
.position {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
}
.icon-car-count {
  min-width: 14px;
  text-align: center;
  line-height: 14px;
  display: inline-block;
  position: absolute;
  right: -10px;
  top: -12px;
  background: red;
  color: #fff;
  border-radius: 17px;
  padding: 6px;
  font-size: 16px;
  transform: scale(0.7);
}

.icon-car-count:before {
  content: " ";
  position: absolute;
  left: 10px;
  top: 8px;
  opacity: 0.75;
  width: 0;
  height: 0;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
  z-index: -1;
}

.count-ani:before {
  -webkit-animation-name: ripple;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-delay: 0s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-direction: normal;
}

@keyframes ripple {
  0% {
    left: 10px;
    top: 8px;
    opacity: 0.95;
    width: 0;
    height: 0;
  }

  99% {
    left: -25px;
    top: -27px;
    opacity: 0.3;
    width: 80px;
    height: 80px;
  }

  100% {
    opacity: 0;
  }
}
</style>
