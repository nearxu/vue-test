/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:08:44
 * @LastEditTime: 2019-08-23 17:47:45
 * @LastEditors: Please set LastEditors
 */
import Vuex from 'vuex'
import vue from 'vue'
import { sleep } from '@/utils'

vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    listIor: []
  },
  mutations: {
    add (state) {
      state.count += 1
    },
    addIor (state, data) {
      state.listIor = data
    }
  },
  actions: {
    addActions ({ commit, state }) {
      let timer = setTimeout(() => {
        const count = state.count + 1
        commit('addIor', count)
        clearTimeout(timer)
        timer = null
      }, 10)
    },
    setIntervalAdd ({ dispatch, state }) {
      dispatch('addActions')
      sleep(1000).then(() => {
        if (state.count < 10) {
          dispatch('setIntervalAdd')
        }
      })
    },
    addIorAsync ({ commit, dispatch }) {
      dispatch('addActions')
      sleep(1000).then(() => {
        dispatch('addIorAsync')
      })
    },
    async getData ({ state }, index) {
      let data
      if (state.listIor[index]) {
        data = state.listIor[index]
      } else {
        data = 0
      }
      data = await setTimeout(() => {
        console.log(data, 'data')
        data = data + 1
      }, 10)
      console.log(data, '2')
      return data
    },
    async addList ({ commit, dispatch, state }, index) {
      const ID = await dispatch('getData', index)
      let data = JSON.parse(JSON.stringify(state.listIor))
      data[index] = ID
      commit('addIor', data)
      sleep(1000).then(() => {
        dispatch('addList', index)
      })
    }
  }
})

export default store
