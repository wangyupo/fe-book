# css省略号

### 单行文本

四个必备条件：

* 必须设置宽度（不写宽度，继承父元素的宽度）

* 溢出隐藏

* 强制文本在一行显示

* 文字隐藏的方式：以省略号的方式隐藏

```css
p {
  width: 100px; /* 必须设置宽度 */
  overflow: hidden; /* 溢出隐藏 */
  white-space: no-wrap; /* 强制文本在一行显示 */
  text-overflow: ellipsis; /* 文字隐藏的方式：以省略号的方式隐藏 */
}
```

> 以上三行代码一起使用才能达到效果（必须有宽度）

### 多行文本

主要运用于移动端

必备条件：

* 弹性盒模型

* 规定元素的排列方式：垂直排列

* 文字的行数

* 溢出隐藏

* 文字隐藏的方式：以省略号的方式隐藏

```css
p {
  display: -webkit-box; /* 弹性盒模型 */
  -webkit-box-orient: vertical; /* 规定元素的排列方式：垂直排列 */
  -webkit-line-clamp: 2; /* 文字的行数 需要显示几行值就为几 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 文字隐藏的方式：以省略号的方式隐藏 */
}
```


