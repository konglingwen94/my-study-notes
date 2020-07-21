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

```
