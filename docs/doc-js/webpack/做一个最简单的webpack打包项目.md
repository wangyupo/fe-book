# 做一个最简单的webpack打包项目

::: tip 
提示：本文webpack版本为4.30.0
:::

## 一、搭建项目

项目的`基本结构`为：

```js
webpack
  |- src
  |  |- index.js
  |- index.html         // 配置webpack中有讲
  |- package.json
  |- webpack.config.js
```

> 其中，`package.json` 由 `yarn init -y` 生成，用来管理npm包。\
webpack.config.js，是webpack官方规定的配置文件。

为此，我们需要初始化`npm`工具并安装`webpack`，命令行执行：

```js
// 初始化package.json
yarn init -y

// 安装webpack
yarn add webpack webapck-cli webpack-dev-server -D
```

接下来，我们就可以直接在命令行执行 `webpack` 进行打包，因为 `./src/index.js` 是 `webpack` 的默认 `入口文件`。

> 如果你看到了这里，并且成功的在 `dist`目录下打包出了 `main.js` ，那么恭喜你，你成功的做出了一个用webpack打包的项目。

## 二、配置webpack

在这里我们需要几个 `webpack插件`，命令行执行：

```js
yarn add html-webpack-plugin clean-webpack-plugin -D
```

然后在 `webpack.config.js` 中配置以下内容：

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {    // webpack开启node服务
        contentBase: './dist',
        hot: true,
        open: true  // 自动在浏览器打开
    },
    plugins: [
        new CleanWebpackPlugin(),   // 每次打包都先删除前一次打包的文件
        new HtmlWebpackPlugin({     // 生成html模版
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()    // 热更新，即不用刷新页面就可以更新数据
    ]
}
```

接下来，需要在 `package.json` 中加入我们自己配置的命令，来简化我们的代码量。

```js
// package.json

"scripts": {
    "start": "webpack-dev-server --config webpack.config.js",
    "build": "webpack --config webpack.config.js"
}
```

至此，我就可以直接运行 `yarn start` 或 `yarn build` 来启动、打包我们的项目了。






