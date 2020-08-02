# 持续集成

## SSH 协议文件传输

### ssh 自动认证密码登录远程服务器配置

添加一下配置到电脑目录`/.ssh/config`

```bash
Host myremote            # any name for the host

HostName 192.168.178.05  # IP, .local, or hostname if defined

User username            # your username

Port 22                  # port to listen
```

设置完成后删除`#`开头的注释，不然回报 `/Users/username/.ssh/config line 10: garbage at end of line; "#".` 的错误，具体原因不是很清楚，只能先这样设置。

#### 使用

```bash
ssh myremote
```

::: tip 参考

<https://www.jianshu.com/p/44060824ec2a>

<https://askubuntu.com/questions/257472/host-alias-for-ssh>
:::

### SCP 两台服务器无密码传输文件配置

1. 将 主机 A `.ssh` 目录中的 `id_rsa.pub` 文件复制到 主机 B 的 `~/.ssh/` 目录中，并改名为 `authorized_keys`。

scp .ssh/id_rsa.pub 192.168.10.2:/root/.ssh/authorized_keys

以后从 A 主机 scp 到 B 主机就不需要密码了

2. 测试主机 A 文件 复制到主机 B

```bash
scp <dir>|<file> IP:/dirname

EXP. scp <dir> 192.168.1.1:/var/www
```

复制成功

## 项目持续集成方案

### github actions

1. 在项目根目录新建`.github/workflows/`目录结构，在`workflows`目录新建一个以`yml`为扩展名的文件，文件可以自由命名

2. 搜索`github`官方的`actions`市场，选择一个适合自己的持续集成方案`action`,目前以`actions-gh-pages`为例配置文件如下

```yml
 - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          publish_dir: dist
          allow_empty_commit: true

```

文件中的`secrets.PERSONAL_TOKEN`是个人`github`账号的生产的`personal access token`，需要为这个加密字段配置
`repo`访问的权限才能生效。

> 参考: [持续集成利器，GitHub Actions](https://juejin.im/post/6845166891665719309)

### Git hooks

1. 下载[yorkie](https://github.com/yyx990803/yorkie)模块

```bash
npm install yorkie --save-dev

```

2. 配置`package.json`文件中的`gitHooks`字段

```json
{
  "gitHooks": {
    "pre-push": "npm run deploy"
  }
}
```

配置完成后，每次项目提交到远程仓库之前都会执行`pre-push`的命令

::: tip 参考:
<https://blog.csdn.net/weixin_33750452/article/details/91399836>

<https://www.cnblogs.com/coldfrost/p/11547362.html>
:::
