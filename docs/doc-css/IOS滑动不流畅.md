# IOS滑动不流畅

在css中添加这两行代码

```css
overflow:scroll;
-webkit-overflow-scrolling:touch;
```

解释：

> -webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.

**auto**
> 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。

**touch**
> 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。

```css
-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */
-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */
```

### 参考链接：

1、[ios页面overflow:scroll;滚动不流畅 - segmentfault](https://segmentfault.com/a/1190000008788147)

2、[关于移动端开发中遇到的坑 - 掘金](https://juejin.im/entry/5a80fc6df265da4e732ec9ac)

3、[-webkit-overflow-scrolling - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-overflow-scrolling)
