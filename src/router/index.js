import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/foo'
import Bar from '@/components/bar'
import List from '@/components/list'
import Detail from '@/components/detail'
import Input from '@/components/input'
import Form from '@/components/form/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
