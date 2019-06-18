

### vue 组件之间的通讯方式

#### 父子之间

props 父传子

$emit/$on 子传父
var Event=new Vue();
Event.$emit(事件名,数据);
Event.$on(事件名,data => {});

$parent/$children/$ref

#### 兄弟组件通讯

vuex
bus

#### 多级传递

provide/inject
$attrs/$listeners

attrs 传递下去的props，以及上级的props的参数是没有的


#### some example from 

https://github.com/lesonwu/Blog/issues/6