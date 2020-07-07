# NPM

## 基本命令

```bash
1. npm init 以交互式命令创建`package.json`文件

    -y 丢弃交互式命令默认创建`package.json`文件

2. npm install  安装所有本地模块
    alias, i
   npm install <package> 安装指定包的最新版本

   npm install <package>@<version> 安装指定版本的指定包
   
    --save-dev -D  保存到**package.json**文件中的`devDependencies`字段

    --save, -S  保存到**package.json**文件中的`dependencies`字段

    --no-save, -D  不保存到**package.json**文件中

3. npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]
```
