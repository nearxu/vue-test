<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <child>
      <div class="tmpl">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
    </child>
    <div class="tmpl" slot="down">
      <span>菜单-12</span>
      <span>菜单-22</span>
      <span>菜单-32</span>
      <span>菜单-42</span>
      <span>菜单-52</span>
      <span>菜单-62</span>
    </div>
    <div class="tmpl" slot="up">
      <span>菜单-11</span>
      <span>菜单-21</span>
      <span>菜单-31</span>
      <span>菜单-41</span>
      <span>菜单-51</span>
      <span>菜单-61</span>
    </div>
  </div>
</template>
<script>
import Child from './son-slot'
export default {
  name: 'FatherSlot',
  components: {
    Child
  }
}
</script>
<style>
</style>
