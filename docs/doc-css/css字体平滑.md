# css字体平滑

在用 **iview** 开发的时候，发现去掉iview的css属性，网页的字体会 **加粗** ，无论怎么设置 **font-weight** 都无效。

后经对比，在取消iview.css前后，同一个font-weight:400显示不同的粗细。这是什么原因呢？

最后找到这么一个css属性—— `-webkit-font-smoothing:antialiased` ,经查找，这个属性是“`对字体进行抗锯齿渲染从而使字体看起来会更清晰舒服`”。

结果去掉iview.css，并在body中加上 `-webkit-font-smoothing:antialiased` ,字体的显示回归正常！
