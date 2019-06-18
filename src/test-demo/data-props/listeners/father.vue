
<template>
  <div>
    <h2>浪里行舟</h2>
    <son1 :foo="foo" :boo="boo" :coo="coo" :doo="doo" title="前端工匠"></son1>
  </div>
</template>
<script>
import Son1 from './son1'
export default {
  components: {
    'son1': Son1
  },
  data () {
    return {
      foo: 'Javascript',
      boo: 'Html',
      coo: 'CSS',
      doo: 'Vue'
    }
  }
}
</script>
