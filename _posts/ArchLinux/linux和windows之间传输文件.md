---
title: linux和windows之间传输文件
date:  2016-07-27 10:26
categories:
    - archlinux
tags:
    - ssh
---


## ssh安装

我使用的是archlinux系统，那么首先要先安装`ssh`和`xshell`

```sh
yaourt -S openssh
# 然后windws下安装xshell
```

`archliux`启动`ssh`服务

```sh

#1 手动开启ssh
sudo systemctl start sshd

#2 系统启动时自动运行
sudo systemctl enable sshd

```

如果还不能登录，有可能要修改

```
/etc/hosts.deny     #默认拒绝所有连接
/etc/hosts.allow    #默认没有任何允许连接
                    #需要手动添加
#例
vim /etc/hosts.allow
sshd:192.168.1.1 ALLOW

# 重启sshd
systemctl restart sshd
```


## 传输文件

`archlinux`安装文件

```sh
yaourt -S lrzsz

rz #接收文件，xshell会出现一个对话框
sz file # 发送文件到windows
```
