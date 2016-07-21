---
title: archlinux安装笔记
date:  2016-04-14 13:23
categories:
    - 笔记
tags:
    - archlinux
---

## 前面

安装的过程应该有正面几个大的步骤:

 1. 下载arch iso
 2. 载入,分区
 3. 设置
 4. 安装系统
 5. 安装bootloader

设置`archlinux.iso`为第一起动,启动完成后会以 root 登录并进入zsh命令提示,使用`vim`编辑文件

**分区类型选择**,当然是GPT了,虽然难了一点,使用`parted`工具来分区

## 安装过程



### 分区

我们使用`parted`手动分区


  - /boot：引导分区
  - swap：交换区
  - /：根分区
  - /home：用户目录区

```
parted /dev/sdx      # 打开一个设置,进行分区
(parted) mklabel gpt # 为UEFI系统创建GPT分区表
(parted) mkpart ESP fat32 1M 513M #创建一个ESP-EFI启动分区
(parted) set 1 boot on #启动目录
(parted) mkpart primary ext4 513M 20.5G  #20G给/
(parted) mkpart primary linux-swap 20.5G 24.5G # 4G swap
(parted) mkpart primary ext4 24.5G 100%      #剩下给 /home

```

 > 更好用的` cfdisk`


格式化文件系统

```
lsblk /dev/sdx          #查看所有系统
mkfs.vfat -F32 /dev/sdxI
mkfs.ext4 /dev/sdxI

mkswap /dev/sdxI
swapon /dev/sdxI
```

挂载分区

```
mount /dev/sdxI  /mnt

mkdir /mnt/home
mount /dev/sdxI /mnt/home

mkdir -p /mnt/boot
mount /dev/sdxI /mnt/boot
```


### 安装系统镜像

从 `/etc/pacman.d/mirrorlist` 中定义的镜像站中下载安装包到本地

```
vim /etc/pacman.d/mirrorlistk
pacman -Syy #强制刷新

pacstrap -i /mnt base base-devel #安装基本包

```

### 配置

 - fstab  # genfstab -U -p /mnt >> /mnt/etc/fstab
 - chroot  # arch-chroot /mnt /bin/bash
 - Locale
 - 时间
   - 时区
   - 时间标准
 - 创建初始 ramdisk 环境
 - 设置 Root 密码
 - 安装 bootloader
 - 配置网络
 - 卸载分区并重启系统

###

把普通用户加到`sudoers`里

```
pacman -S sudo #安装sudosudo
用户名   ALL=(ALL) ALL
```

安装显卡驱动:`pacman -S xf86-video-vesa`

安装yaourt

```
vim /etc/pacman.conf

[archlinuxcn]
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = http://mirrors.163.com/archlinux-cn/$arch
pacman -Sy yaourt  


```


使用 rxvt
http://www.tuicool.com/articles/m6vQza
yaourt -S rxvt-unicode-patched 



<p style="text-align: center;font-size:40px">常用软件的安装</p>

```
yaourt -S git
#yaourt -S google-chrome
#yaourt -S chromium
pacman -S ttf-dejavu wqy-zenhei wqy-microhei
fc-list
fc-list:lang=zh
yaourt -S xcompmgr #透明用
yaourt -S transset-df #透明用
yaourt -S curl
yaourt -S pcmanfm #UI 文件浏览
yaourt -S spacefm #UI 文件浏览
```
字体
http://wiki.ubuntu.org.cn/%E5%AD%97%E4%BD%93#.E5.9F.BA.E7.A1.80.E7.9F.A5.E8.AF.86

 - 首先要有一个字体的设置
 - 然后名字要写对,好像如果字体的名字没有写对,就会使用默认的字体

<p style="text-align: center;font-size:40px">i3wm的使用</p>

[安装](http://blog.csdn.net/ccoday/article/details/49401445)


<p style="text-align: center;font-size:35px">ZSH与oh-my-zsh的安装</p>

```
cat /etc/shells #安装了哪些shell
echo $SHELL     #当前使用的是那个shell
yaourt -S zsh
chsh -s /bin/zhs #替换bash为zsh
```


### 引用
 
 - [在ubuntu中安装与配置zsh与oh-my-zsh](http://www.tuicool.com/articles/2Ijiuy)


<p style="text-align: center;font-size:24px">fcitx-rime输入法的使用</p>

```
fcitx-rime
fcitx-configtool
fcitx-im
```

## 引用

 - [linux下的小企鹅输入法说明及其安装 - Slackware /Solaris /嵌入式...](http://www.360doc.com/content/11/0128/17/2036337_89612959.shtml)


## 引用
 
 - [wiki新手指南](https://wiki.archlinux.org/index.php/Beginners%27_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
 - [打造完美的archlinux桌面](https://linuxtoy.org/archives/the-perfect-linux-desktop-arch-linux-2007-08-2-1.html)
 - [i3wm官方DOC](http://i3wm.org/docs/userguide.html)
 - [archlinux wiki i3](https://wiki.archlinux.org/index.php/I3_(简体中文))
 - [debian使用i3教程：从0开始](http://tieba.baidu.com/p/4332307704)
 - [deepin-i3 wiki](https://wiki.deepin.org/?title=I3)
 - [好用的 Tiling wm——i3wm](https://forum.suse.org.cn/viewtopic.php?f=23&t=262)
