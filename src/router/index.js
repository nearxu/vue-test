import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/foo'
import Bar from '@/components/bar'
import List from '@/components/list'
import Detail from '@/components/detail'
import Input from '@/components/input'
import Form from '@/components/form/form'
import Data from '@/test-demo/data-props/index'
import Slot from '@/test-demo/slot/index'
import DeepWatch from '@/test-demo/deep-watch'
import Tab from '@/test-demo/routes/index'
import ContentComponent from '@/test-demo/routes/content'
import foo1 from '@/components/foo1'
import foo2 from '@/components/foo2'
import Ws from '@/components/ws'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ws',
      name: 'ws',
      component: Ws
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
      redirect: '/foo1',
      children: [
        {
          path: '/foo1',
          name: 'foo1',
          component: foo1
        },
        {
          path: '/foo2',
          name: 'foo2',
          component: foo2
        }
      ]
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
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/deep-watch',
      name: 'DeepWatch',
      component: DeepWatch
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab,
      children: [
        {
          path: ':id',
          name: 'tab-detail',
          component: ContentComponent
        }
      ]
    }
  ]
})
