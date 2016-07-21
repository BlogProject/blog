---
title: nodejs 代码测试学习
date:  2016-06-02 14:00
categories:
    -  分类 
tags:
    -  tag 
---

## 学习资源

 - [初识mocha](http://blog.csdn.net/lhfcws/article/details/8783553)
 
## 初步使用

> 安装 `npm install -g mocha`

最简单的一个mocha示例
```
var assert = require("assert");  
describe('Array', function(){  
    describe('#indexOf()', function(){  
          it('should return -1 when the value is not present', function(){  
            assert.equal(-1, [1,2,3].indexOf(5));  
            assert.equal(-1, [1,2,3].indexOf(0));  
        })  
    })  
});  
```
