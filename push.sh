#!/bin/sh

printf -- '\n\033[34m 开始打包静态页面... \033[0m\n\n';

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

printf -- '\n\033[34m 静态页面打包完毕，开始推送... \033[0m\n\n';

git init
git add -A
git commit -m 'deploy' >&-
git remote add origin https://github.com/wangyupo/fe-book.git
git push -f origin master

cd -

printf -- '\n\033[34m 静态页面推送完毕，开始更新vuePress... \033[0m\n\n';

git add .
git commit -m 'feat: 更新vuePress'
git checkout vuePress
git merge master
git push origin vuePress
git checkout master

printf -- '\n\033[32m SUCCESS: vuePress更新完毕，正在关闭... \033[0m\n\n';
