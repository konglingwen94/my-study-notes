# 操作数组常用方法

## 数组随机化排序

1. 改变原数组的方式

```js
const array = [1, 2, 3, 4];

for (let i = 0, len = array.length; i < len; i++) {
  // 获取数组的随机索引
  const randomIndex = Math.floor(Math.random() * len);

  const temp = array[i];

  array[i] = array[randomIndex];

  array[randomIndex] = temp;
}
```

2. 将数据在`Vue`中映射到视图的方式

2.1 数组变异方法修改

```js
const array = [1, 2, 4, 5];

for (let i = 0, len = array.length; i < len; i++) {
  const randomIndex = Math.floor(Math.random() * len);

  const temp = array[i];

  array.splice(i, 1, array[randomIndex]);
  array.splice(randomIndex, 1, temp);
}
```

2.2 赋值新数组

```js
// 这里假设 Vue 实例的`data`是这样
//  data(){
//     return {
//         array:[1,2,4,5]
//     }
// }

const copyArray = this.array.slice();
for (let i = 0, len = copyArray.length; i < len; i++) {
  // 获取数组的随机索引
  const randomIndex = Math.floor(Math.random() * len);

  const temp = copyArray[i];

  copyArray[i] = copyArray[randomIndex];

  copyArray[randomIndex] = temp;
}

this.array = copyArray;
```
