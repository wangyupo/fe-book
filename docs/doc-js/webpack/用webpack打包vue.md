# 用webpack打包vue

vue是什么？

> vue就是一个渐进式 `JavaScript` 框架。

### 准备工作

首先我们需要一个基本的 `webpack` 打包的项目的 [架子](https://github.com/wangyupo/webpack-learn)。

然后依托Vue的官方 [文档](https://vue-loader.vuejs.org/zh/guide/#vue-cli) 进行配置

### 安装loader

```js
yarn add vue-loader vue-template-compiler -D
```

### 配置webpack

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // webpack开启node服务
        contentBase: './dist',
        hot: true,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(), // 每次打包都先删除前一次打包的文件
        new HtmlWebpackPlugin({ // 生成html模版
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新，即不用刷新页面就可以更新数据
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
}
```

### 添加app.vue

```js
// 在src/下添加app.vue
<template>
    <div>
        vue
    </div>
</template>

<script>
    export default {

    }
</script>
```

### 初始化vue对象

```js
// 修改src/index.js
import Vue from 'vue'
import App from './app.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')
```

> 还记得webpack.config.js中的entry吗？这就是为什么要在src/index.js中初始化vue对象。

### 运行

执行 `yarn start` ，然后随便修改一下app.vue里面的内容。

> 就这样，我们用webpack打包出了vue项目，剩下的就是项目的架构、配置等等了，慢慢踩坑就行了，简单吧～
