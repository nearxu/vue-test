<template>
  <div class="hello">
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <button @click="alertUser(user)">{{ user }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    alertUser (data) {
      this.$emit('sonUser', data)
    }
  }
}
</script>
