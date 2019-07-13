# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev


### some vue api

vue-router

from https://juejin.im/post/5b0281b851882542845257e7

<router-link to="foo"></router-link>

动态路由 params query

<router-link :to="{name:'detail',params:{id:'123'},query:{status:'200'}}"></router-link>

$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。

$router 是“路由实例”对象，即使用 new VueRouter创建的实例，包括了路由的跳转方法，钩子函数等。


## test-demo

### data-props 组件之间的通讯方式

### slot 插槽

### deep-watch 深度监听

first bind v-model
immediate: true
deep:true

计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。


### some need finish




vue-router 导航守卫

### eventBus

data(){
  return {
    eventBus:new Vue()
  }
}

mounted(){
  this.$root.$eventBus.$on('emit',this.emit)
}
destroy(){
  this.$root.$eventBus.$on('emit')
}

### some about vue life

parent and child life

1.parent created
2.child created
3.child mounted
4.parent mounted