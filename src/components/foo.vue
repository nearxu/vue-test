<template>
  <div class="content">
    <h2>{{ msg }}</h2>
    <button @click="toggle">toggle model</button>
    <v-model :isShow="isShow" @onClose="onClose">
      <div slot="header">插入到name为header的slot标签里面</div>
      <div class="dialog_publish_main" slot="main">
        <div>
          <label for="name"></label>
          <input type="text" name="name" v-model="name" />
          <label for="password"></label>
          <input type="text" name="password" v-model="password" />
          <button @click="submit">submit</button>
        </div>
      </div>
    </v-model>
    <router-link :to="'/foo1'">foo1</router-link>
    <router-link :to="'/foo2'">foo2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Model from './model'

export default {
  name: 'Foo',
  data () {
    return {
      msg: 'hello foo',
      isShow: false,
      name: '',
      password: ''
    }
  },
  computed: {
    username () {
      console.log(this.$route.params.username, 'params')
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    onClose () {
      this.isShow = false
    },
    toggle () {
      this.isShow = true
    },
    submit (e) {
      console.log(e)
    }
  },
  components: {
    'v-model': Model
  }
}
</script>

<style>
.content {
  width: 600px;
  height: 800px;
  background: red;
  position: relative;
}
</style>
