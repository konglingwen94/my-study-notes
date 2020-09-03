# 常用工具函数

## 给`scroll`,`resize`等高频触发事件节流

```js
/*
 @params
fn 节流的函数
interval 函数执行的间隔时间
*/

function throttle(fn, interval) {
  let prevTimer;
  let now = Date.now();
  return function() {
    if (!prevTimer) {
      prevTimer = now;
    }
    if (now - prevTimer > interval) {
      fn.apply(this, arguments);
      prevTimer = now;
    }
  };
}

// window 为浏览器全局对象

window.onscroll = throttle(() => {
  // 这里最少每隔100ms才会执行
}, 100);
```

:::tip 代码演示
<a target="_blank" href="/demos/utils.html" ></a>

<http://123.56.124.33:7000/demos/js/utils.html#throttle>

:::

## 给浏览器 DOM`input`事件防抖

```js
function debounce(fn, delay) {
  let timer;

  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

// 假设`input`为文本输入框DOM节点

input.oninput = debounce(() => {
  // 100ms内这里只会执行一次
}, 100);
```

:::tip 代码演示
<http://123.56.124.33:7000/demos/js/utils.html#debounce>
:::
