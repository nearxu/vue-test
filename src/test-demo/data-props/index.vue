<template>
  <div>
    <h1>vue 组件之间的通讯方式</h1>

    <h2>provide inject</h2>
    <provide-inject></provide-inject>

    <h2>emit data</h2>
    <emit-data></emit-data>

    <h2>$attrs listeners</h2>
    <attrs-listeners></attrs-listeners>

    <h2>ref</h2>
    <!-- <v-ref></v-ref> -->

    <h2>some all of connnect,special bus</h2>
    <v-bus></v-bus>
  </div>
</template>

<script>
import ProvideInject from './inject-provide/father'
import EmitData from './emit/father'
import Listeners from './listeners/father'
import Refs from './ref/father'
import Bus from './bus/index'

export default {
  components: {
    ProvideInject,
    'emit-data': EmitData,
    'attrs-listeners': Listeners,
    'v-ref': Refs,
    'v-bus': Bus
  }
}
</script>
<style>
</style>
