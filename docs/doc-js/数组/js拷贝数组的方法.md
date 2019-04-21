# js拷贝数组的方法

**slice**

> 返回一个新的数组对象，这一对象是一个由 `begin`和 `end`（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。且如果 `end` 被省略，则slice 会一直提取到原数组末尾。

```js
let arr = [1,2,3]
let arr1 = arr.slice()
arr1[0] = 2
console.log(arr)
console.log(arr1)
// [1,2,3]
// [2,2,3]
```

**concat**

> 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
let arr = [1,2,3]
let arr1 = arr.concat()
arr1[0] = 2
console.log(arr)
console.log(arr1)
// [1,2,3]
// [2,2,3]
```

**form**

> 从一个类似数组或可迭代对象中创建一个新的数组实例。

```js
let arr = [1,2,3]
let arr1 = Array.from(arr)
arr1[0] = 2
console.log(arr)
console.log(arr1)
// [1,2,3]
// [2,2,3]
```

**...（扩展运算符）**

```js
let arr = [1,2,3]
let arr1 = [...arr]
arr1[0] = 2
console.log(arr)
console.log(arr1)
// [1,2,3]
// [2,2,3]
```


