# GIT

## 基本命令

```bash
1. git init 初始化仓库

2. git clone `url`(远程仓库地址) 克隆项目
```

## 文件操作

1. 添加工作区文件到暂存区

```bash
 
git add 文件名|目录（可以添加多个，中间用空格间隔）  跟踪文件
```

2. 恢复暂存区文件

```bash
git restore 文件|目录 撤销在工作区但不在暂存区的文件更改，会更改文件


git restore --staged 将暂存区的文件更改撤销到工作区，但不会更改文件
```

3. 删除文件

```bash

git rm 文件名 --cached 删除在暂存区中的文件，不会删除工作区中的文件
```

4. 提交到版本库

```bash

git commit 文件名 | 目录（可连续添加多个，用空格间隔）-m 提交日志

git commit 文件名 | 目录（可连续添加多个，用空格间隔）--amend 合并到上一个版本库（会打开一个vim编辑器用来编辑上一个的提交日志）

git commit  -a 提交所有更改的文件（可与其他参数串联使用）

```

5. 同步远程版本库

```bash
git pull <remote> branch 合并远程版本库到本地

比如：`git pull origin master`


git push <remote> branch 推送当前版本库到远程分支

比如: `git push origin dev`

-u,--set-upstream 设置默认推送到远程版本库的分支

比如: `git push -u origin dev`

git fetch 查看远程版本库是否有新的更新

```

## 查询

1. 查看当前工作树状态

```bash
git status
```

2. 查看被**git**管理的文件

```bash
git ls-files
```

3. 查看版本库历史记录

```bash
git log

--graph 以分支图的方式显示

- <number> 显示指定个数的版本日志,默认从最近的记录开始
```

4. 版本库日志统计

```bash
git rev-list

--all 显示所有**commitID**

--all --count 查看所有分支下的**commit**数量

```

5. 远程主机

```bash
git remote 查询远程主机名称

-v 查看同步跟踪的分支地址

案列：

`git remote -v`

`origin  git@github.com:konglingwen94/my-study-notes.git (fetch)`
`origin  git@github.com:konglingwen94/my-study-notes.git (push)`

```

## 分支管理

1. 查看

```bash
git branch 查看所有分支和当前分支

-l, --list 列出所有本地分支

-r, --remote 列出所有远程分支

-m <oldBranch> <newBranch> 重命名当前分支

-a, --all 列出所有分支（包含远程和本地分支）

```

2. 切换分支

```bash
git checkout <branch> 切换到新分支

-b 基于当前分支的暂存区内容新建并切换到新分支

例如：`git checkout -b newbranch`



```
