#react 学习中.... 

##2019.4.21
 
###组件间通信
 +方式1：通过props传递
  - 组件间消息传递 父组件传向子组件 子组件传父组件  兄弟组件间传递  this.props
  - 通过props可以通过传递一般数据和函数，数据只能一层一层传递
  - 一般数据->父组件传递数据给子组件->子组件读取数据
  - 函数数据->子组件传递数据给父组件->子组件调用函数 
 +方式2：使用消息订阅(subscribe)-发布(publish)机制
  -工具库：PubSubJS
  -下载：npm i pubsub-js -S
  -具体实现：
  `import PubSub from 'pubsub-js'`
  `PubSub.publish('消息名','消息参数')`
  `PubSub.subscribe('消息名',(msg,消息参数)=>{})`
