<template>
  <user :users="users" @sonUser="alertUser"></user>
</template>
<script>
import User from './son'
export default {
  name: 'Father',
  data () {
    return {
      users: ['Henry', 'Bucky', 'Emily']
    }
  },
  components: {
    'user': User
  },
  methods: {
    alertUser (e) {
      alert(e)
    }
  }
}
</script>
