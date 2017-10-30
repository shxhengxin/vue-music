# vue-music

> 音乐播放器

## 安装项目及搭建手脚架

```angular2html
## 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```
## 安装依赖
```
#vconsole移动端调试工具，在移动端输出日志 stylus css预编译处理器 babel-polyfill 用于实现浏览器不支持原生功能的代码
$ npm install --save-dev stylus-loader stylus vconsole babel-polyfill
# babel-runtime解析es6语法 fastclick移动端点击
$ npm install --save babel-runtime fastclick
$ npm install --save jsonp
```
## 在main.js
```
import 'babel-polyfill'

import fastclick from 'fastclick'
fastclick.attach(document.body)

```

## 创建相应的组件
```apacheconfig
m-header.vue 页面头部组件
rank 排行榜页面组件
recommend 推荐页面组件
search 搜索页面组件
singer 歌手页面组件
tab 顶部导航栏组件
```

## 封装jsonp
``

    import originJsonp from 'jsonp'
    
    export default function jsonp(url, data, option) {
      url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    
      return new Promise((resolve, reject) => {
        originJsonp(url, option, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      })
    }
    
    export function param(data) {
      let url = ''
      for (var i in data) {
        let value = data[i] !== undefined ? data[i] : ''
        url += '&' + i + '=' + encodeURIComponent(value)
      }
      return url ? url.substring(1) : ''
    }
``
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
