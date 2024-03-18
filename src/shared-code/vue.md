# Vue2 和 Vue3 的区别

Vue2 和 Vue3 都是目前最流行的前端框架，两者之间的区别主要体现在以下方面：

+ 响应式系统：
  + Vue2使用了`Object.defineProperty`来实现响应式系统，这是一个属性级别的监听。
  这意味着如果你新增或删除了一个对象的属性，Vue2有可能不会自动更新视图，这也是为什么要提供$set和$delete方法的原因。
  + Vue3使用了`Proxy`来实现响应式系统,这是一个更加全面的解决方案，它可以监听数组和对象的所有变动。
  因此它性能更好，功能更全。
+ 组合式API：
  + Vue2主要使用的Option API，它其实是一个配置对象，我们常用的有data,methods,watch等。
  + Vue3新增了Composition API，它是一个函数式的API，我们可以用函数来组合组件逻辑，更加灵活解耦。
+ ts支持
  + Vue2支持ts，但需要额外的插件。
  + Vue3使用ts重写的，因此本身就支持ts。
+ Fragment:
  + Vue2没有Fragment，因此一个组件只能有一个根元素。
  + Vue3里Fragment，一个组件可以有多个根元素。
+ 自定义渲染器(Custom Renderer):
  + Vue2没有开放渲染的相关接口，不能直接使用
  + Vue3提供了自定义渲染器的接口，可以自定义渲染器，实现自定义渲染逻辑。这样会有更高的可移植性
+ 模版编译优化：
  + Vue2的模版编译没什么优化，每次都会生成新的VNodes，并且每次diff也是全量diff，性能较差。
  + Vue3将VNode分为静态和动态，静态的VNode只需要生成一次，动态的VNode每次更新都会重新生成。
  通过这编译时对VNode打标签（Patch Flag）来优化diff，每次只diff动态节点，从而显著的提高来性能。
  后续还会引入无虚拟DOM的渲染模式，Vue3称之为Vapor Mode，进一步提升性能。
+ 打包体积优化：
  + Vue2的打包体积较大，因为它不是ESM，每次都会全量引入。
  + Vue3使用了ESM，可以Tree Shaking，打包体积更小，并且可以按需引入。
# Vue2 和 Vue3 的选择
其实这两个本质上就是一个框架，只是版本不同，功能也有所不同。但是作为项目选型，我们首先应该考虑兼容性问题
+ 兼容性
  + Vue2：Vue2支持IE9+，但不支持IE8及以下版本。
  + Vue3：Vue3支持IE11+，但不支持IE9及以下版本。
  + 生态:其实就是开发的便利性，在这方面Vue3目前和Vue2算是旗鼓相当， 两边生态都差不多。
  你只需要关注你的一些核心库只不支持Vue3， 如果都支持，还是建议选择Vue3。
+ 团队成本

  团队是不是更适应Vue2，是不是都会ts，这也是使用vue3的成本之一。
# 我常用的三方库

## 项目模版
>antfu是谁不用我说了吧？Vue、Vite核心团队成员，Vueuse开发者，他的模版基本上就是天花板。

  + [vitesse](https://github.com/antfu/vitesse)
  + [vitesse-lite](https://github.com/antfu/vitesse-lite)

---

>varlet是一个material 风格的UI库，如果你准备写WebApp可以试试这一套模版。

[varlet-app-template]（https://github.com/varletjs/varlet-app-template)
[varlet-app-template-lite]（https://github.com/varletjs/varlet-app-template-lite)

---

>一款基于Vant的WebApp开发模版，性能很高

[vue3-vant-mobile](https://github.com/CharleeWa/vue3-vant-mobile)

---
>后台管理系统模版


如果你的项目是Vue2，那么这个几乎就是唯一选择[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
如果你的项目是Vue3，那么选择就有很多了，我基本是只看界面好不好看，个人推荐：


## UI库
## 工具库
