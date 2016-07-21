---
title: express源码分析与学习
date:  2016-07-12 10:21
categories:
    -  笔记
tags:
    -  express
    -  nodejs
---


## 资源

 - [express源码分析之Router](https://cnodejs.org/topic/5746cdcf991011691ef17b88)
 - [从express源码中探析其路由机制](https://cnodejs.org/topic/545720506537f4d52c414d87)

## 

 - application.js中实现对种app[methods]的方法
    - lazyrouter()实现this._router类
    - this._router.route(path) 执行
        - new 一个Route对象,给了一个new layer()对象
    - route[method].apply()
        - layer 对象:1.rexexp  2.handle
