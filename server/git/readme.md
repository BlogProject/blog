# 自动更新

 - spawnGit 

```
     +--------+
     |timer.js|
     +--------+
         /
        /
       /              文章列表
 +-----------+       +--------+
 |GitSync.js | --->  ||
 +----+------+       +--------+
      |
      |
 +----+------+
 |spawnGit.js|
 +-----------+


 日志文件
 +-----------+
 |logger.js  |
 +-----------+

```

