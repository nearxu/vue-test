<template>
  <div class="ws">
    <input type="text" @input="sendMsg" v-model="msg" />
    <button @click="send">send</button>
  </div>
</template>
<script>

export default {
  name: 'ws',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.$ws.connect('connect')
  },
  methods: {
    sendMsg (e) {
      this.msg = e.target.value.trim()
    },
    send () {
      this.$ws.sendHandle(this.msg)
    }
  }
}
</script>
