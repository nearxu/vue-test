<template>
  <div class="hoc">
    <hoc-button @click="hocClick" title="test">
      <span>hello left</span>
      <span>hello right</span>
    </hoc-button>

    <hoc-button @click="hocClick" title="test">
      <span>hello left1</span>
      <span>hello right</span>
    </hoc-button>

    <hoc-button @click="hocClick" title="test">
      <span>hello left2</span>
      <span>hello right</span>
    </hoc-button>

    <hoc-button @click="hocClick" title="test">
      <span>hello left3</span>
      <span>hello right</span>
    </hoc-button>
  </div>
</template>

<script>
import hocButton from './hoc-button'

export default {
  name: 'hoc',
  components: {
    'hoc-button': hocButton
  },
  methods: {
    hocClick () {
      console.log('hoc click')
    }
  }
}
</script>
