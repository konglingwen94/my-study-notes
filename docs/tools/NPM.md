# NPM

## 所有命令

```bash
Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    /Users/konglingwen/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.14.4 /usr/local/lib/node_modules/npm


```

## 基本命令

```bash
1. npm init 以交互式命令创建`package.json`文件

    -y  直接创建`package.json`文件

2. npm install  安装所有本地模块
    alias, i
   npm install <package> 安装指定包的最新版本

   npm install <package>@<version> 安装指定版本的指定包

    --save-dev -D  保存到**package.json**文件中的`devDependencies`字段

    --save, -S  保存到**package.json**文件中的`dependencies`字段

    --no-save, -D  不保存到**package.json**文件中

3. npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]

参数使用同`npm install`

4. npm ls <pkg> 查看包信息
    --depth=<number>  查看指定深度的依赖包信息
    -g,--global  查看全局模块

5. npm view | info <pkg>@<version> 查看远程仓库包信息

6. npm outdated <pkg> 查看包过期信息

例如

Package                  Current  Wanted  Latest  Location
@vue/cli                   4.3.1   4.4.6   4.4.6  global
@vue/cli-service           4.3.1   4.4.6   4.4.6  global
@vue/cli-service-global    4.3.1   4.4.6   4.4.6  global
http-server               0.12.1  0.12.3  0.12.3  global
npm                       6.14.4  6.14.6  6.14.6  global

```

## 常用命令

```bash
1. npm update <pkg> 更新包

2. npm login 以交互命令行登录用户

3. npm logout 登出用户

4. npm version [<newversion> | major | minor | patch | 更新包新版本

5. npm publish <folder> 发布指定文件夹到远程仓库

```
