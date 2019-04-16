# 数组

> JS的Array对象是用来构造数组的全局对象，数组是类似于列表的高阶对象。

语法：

```js
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

参数：

> 参数 arrayLength 是期望的数组元素个数。返回的数组，length 字段将被设为 arrayLength 的值。\
参数 element0 ..., elementN 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。

本章说明：

本章会只介绍数组有关技术，如常见的去重、排序、递归等等。
