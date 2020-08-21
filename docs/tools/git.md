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

6. 回退版本库 (git reset)

```bash

git reset <commitID> 移动`HEAD`的指针到指定的历史`commitID`

 -- mixed ,保留原来的工作区不变，回退版本带来的差异混入到**工作区** (默认参数)

 --hard 清空暂存区和工作区，看上去有撤销的操作

 --cached 当前的工作区不受影响，由`HEAD`指针移动带来的新差异放到**暂存区**


```

> 详细解析在 [Git Reset 三种模式](https://www.jianshu.com/p/c2ec5f06cf1a)

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

3. 删除分支（需要先前换到其他分支才能做删除操作）

```bash

git branch -d <local-branch> 删除指定名称的本地分支

git push origin -d [remote-branch] 删除指定名称的远程分支

```

4. 更新远程服务器分支状态到本地 （删除本地远程不存在的分支）

```bash
git remote update origin --prune

```

5. 合并指定分支到当前分支

```bash

git merge [branch]

```

## Git stash

添加工作区内容到`git`存储栈（会把工作区内容移除）

```bash
git stash <save "save message"> 添加存储，默认存储信息为`stash@{0}`

git stash -p 以交互式命令进行选择需要存储的文件，需要存储选择`y`,否则选择`n`

git stash list 查看存储列表

git stash show <stash@{n}> 查看做了哪些改动，默认查看第一个存储

git stash show <stash@{n}> -p 查看具体改动内容，默认显示第一个存储 ，类似于`git diff`

git stash pop <stash@{n}> 从存储栈弹出第一个存储并应用到工作区

git stash drop <stash@{n}>  从存储栈中删除指定的存储，默认删除第一个。

git  stash apply <stash@{n}> 应用一个存储，不从存储栈删除

git stash clear 清空存储栈

```

:::tip 参考链接
<https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html>

<https://www.jianshu.com/p/fe4d54cb6244>
:::

## Git Diff & Git show

```bash

git diff <file> 比对所有工作区和暂存区之间的文件内容变动

git diff --cached <file> 比对所有暂存区和版本库之间的文件内容变动

git show 查看最近一次版本库的内容


```

:::tip 详细使用
<http://gitbook.liuhui998.com/3_5.html>
:::
