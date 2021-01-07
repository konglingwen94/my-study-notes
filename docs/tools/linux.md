# Linux

[命令查询](https://wangchujiang.com/linux-command/hot.html)

## 常用命令

1. 查看目录

```bash

ls 查看当前目录

ls <dir> 列出指定目录内容

-R 递归列出目录

-a  查看隐藏的所有文件

```

> [查看更多参数](https://wangchujiang.com/linux-command/c/ls.html)

2. 目录操作

```bash
cd <dir>  进入目录

rm -rf <dir> 递归删除目录

mkdir <dir> 新建目录

mkdir -p <dir> 递归新建目录

mv <oldDirPath> <newDirPath> 重命名/移动 目录

# rename <oldDir> <newDir> 重命名目录
```

3. 文件操作

```bash
rm <file> 删除文件

touch <file> 新建文件

mv <oldFile> <newFile> 移动/重命名 文件

```

4. 文件内容读写

```bash
echo txt > <file> 写入指定内容到文件

echo "content" >> <file> 追加文件内容

cat <file>  读取文件内容

cat <file> | pbcopy 读取文件内容并拷贝到剪贴板
```

## 文件传输

1. 传输文件到远程服务器

```bash

scp -r <dir> username@remoteIP:/var/www/   传输文件夹到指定目录

scp  <filename>  username@remoteIP:/var/www/   传输文件到指定目录,可连续传递多个

```

2. 资源复制

```bash
cp -r <dir> <target> 拷贝目录到指定目录

cp -r <dir>/* <target> 拷贝目录内的文件到指定目录

cp <filename> <target> 拷贝文件到指定位置
```

## 在命令行执行批量脚本文件

1. 编写脚本 `deploy.sh`

```bash

#! /usr/bin/

npm run <scripts>

...

scp <bash>
```

2. 执行`deploy.sh`

```bash
sh deploy.sh

```

## Linux服务器上常用命令

1. 查看指定端口号状态

```bash

 netstat -lanp | grep "3000"
```
2. 安装`mongodb`

```bash
wget  https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.7.tgz 
```

:::tip 参考
https://www.cnblogs.com/gaojingya/p/10607419.html
:::

3. 查看`linux`服务器所有端口号状态

```bash
netstat -aptn
```

4. 创建指定服务的软连接到全局变量

```bash
ln -s <sourcePath> <targetPath>

```