# vue-press搭建的技术书

> 搭建这个的目的只是为了单纯的记录一些技术性解决方案，方便自己翻阅。

## 搭建步骤

```js
# 安装vuepress
yarn global add vuepress@next

# 创建目录
mkdir vue-press && cd vue-press

# 初始化项目
yarn init -y

# 搭建目录结构
vue-press
    ├─ docs
    │  ├─ README.md
    │  └─ .vuepress
    │     └─ config.js
    └─ package.json
    
# 配置package.json
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}

# 运行
yarn dev

# 打包
yarn build
```

基本配置看[这里](https://v1.vuepress.vuejs.org/zh/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

主题配置看[这里](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)

附：[官方文档](https://v1.vuepress.vuejs.org/zh/)

## 分支管理

`master`分支作为`page`分支，设为`GitHub Pages`。

`vuePress`分支作为`仓库`分支，用来管理`vue-press`项目。

## 上线内容

结合`vue-press`提供的[部署脚本](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages)，建立起自己的`push.sh`，每次发布规则如下：

> 发布技术书\
切换vuePress分支\
合并master\
提交vuePress\
切回master分支

详细的运行脚本自行参考`vuePress`分支下的`push.sh`。
