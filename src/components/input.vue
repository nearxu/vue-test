<template>
  <div>
    <input type="text" v-model="val" />
    <button @click="add">add</button>
    <button @click="clear">clear</button>

    <ul>
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span>{{ todo.title }}</span>
      </li>
    </ul>

    <p>{{ active }}/{{ all }}</p>
  </div>
</template>

<script>
export default {
  name: 'input',
  data () {
    return {
      val: '',
      todos: [
        { title: '吃饭', done: true },
        { title: '睡觉', done: false },
        { title: '写代码', done: false }
      ]
    }
  },
  methods: {
    clear () {
      this.todos = this.todos.filter(v => !v.done)
    },
    add () {
      if (this.val) {
        this.todos.push({ title: this.val, done: false })
        this.val = ''
      }
    }
  },
  computed: {
    active () {
      return this.todos.filter(v => !v.done).length
    },
    all () {
      return this.todos.length
    }
  }
}
</script>

<style>
</style>
