# flexbox弹性盒布局
::: info
[推荐一个很好用的flex在线调试工具](https://kexiaolong.gitee.io/flexible-box-display/)
:::
## flex方向

<Flex1 />

::: details
<<< @/components/Flex1.vue{16-17}
:::

```css
flex-direction: row; /* 默认值 */
flex-direction: column; /* 垂直 */
flex-direction: row-reverse; /* 反向 */
flex-direction: column-reverse; /* 反向垂直 */
```

## 换行

<Flex2 />

::: details
<<< @/components/Flex2.vue{22}
:::

```css
flex-wrap: nowrap; /* 不换行 */
flex-wrap: wrap; /* 默认值 */
flex-wrap: wrap-reverse; /* 反向 */
```

## 主轴对齐

<Flex3 />

::: details
<<< @/components/Flex3.vue{27}
:::

```css
justify-content: flex-start; /* 默认值 */
justify-content: flex-end; /* 右对齐 */
justify-content: center; /* 居中 */
justify-content: space-between; /* 两端对齐 */
justify-content: space-around; /* 平均分布 */
```

## 交叉轴对齐

<Flex4 />

::: details
<<< @/components/Flex4.vue{26}
:::

```css
align-items: flex-start; /* 默认值 */
align-items: flex-end; /* 底部对齐 */
align-items: center; /* 居中 */
align-items: stretch; /* 填充 */
```
## 充满剩余空间
<Flex5 />

::: details
<<< @/components/Flex5.vue{34}
:::

```css
flex:1;
```

::: tip
以上就是我对于flex的基本使用，那么请大家多多指教！
:::

## 综合使用：九宫格

<FlexBoxDemo />

::: details
<<< @/components/FlexBoxDemo.vue{17-20}
:::

如果你某一行数量不够，那就会出现这种问题,我的解决办法是给父元素添加一个伪元素，让它占满剩余的空间。

```css
  .container:after{
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    opacity: 0;
  }
```

## 随堂练习：使用flex画骰子

![这是图片](https://en.pimg.jp/040/509/578/1/40509578.jpg)

## 参考资料
- [CSS 弹性盒布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [阮一峰:Flex 布局教程](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [彻底理解CSS Flexbox布局](https://juejin.cn/post/7004622232378966046)
<script setup>
import FlexBoxDemo from '../components/FlexBoxDemo.vue';
import Flex1 from '../components/Flex1.vue';
import Flex2 from '../components/Flex2.vue';
import Flex3 from '../components/Flex3.vue';
import Flex4 from '../components/Flex4.vue';
import Flex5 from '../components/Flex5.vue';

</script>
