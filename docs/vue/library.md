# 组件库

## element-ui

### vue 项目按需引入配置

1. 安装依赖

```bash
 npm i element --save

 npm install babel-plugin-component --save-dev
```

2. 配置`babel.config.js`文件

```js
module.exports = {
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
```

3. 在入口文件引入需要的组件

假设文件名为`src/registerElementComponent.js`

```js
// 导入自己需要的组件
import { Select, Option } from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Select);
    Vue.use(Option);
  },
};
export default element;
```

4. 在`main.js`中引入组件库需要的文件

```js
// css样式还是需要全部引入
import "element-ui/lib/theme-chalk/index.css";
import element from "./registerElementComponent.js";
Vue.use(element);
```

:::tip 参考链接

<https://www.jianshu.com/p/2181f3c263c2>
:::
