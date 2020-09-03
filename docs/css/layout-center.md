# 元素居中布局的各种案例

## 块元素自身相对于父元素水平居中

1. 此条件需要该块元素有固定的宽度，向元素添加样式`margin-left:auto`和`marign-right:auto`,在不考虑上下边距的情况下可以缩写为`margin:0 auto`

2. 此条件限制于元素的宽度为父元素的`100%`,且对元素自身没有固定宽度的要求。给父元素添加`padding-left`和`padding-right`相等的值，在不考虑上下间距的情况下可以缩写为`padding:0 XXpx`。上下居中同理

3. 给相对位置的父元素添加`position:relative`,给自身元素添加`transform:translateX(-50%);left:50%`。此方法是通过计算元素自身位置偏移达到水平居中的目的。上下居中同理

4. 通过`flex`弹性盒子布局。给父元素添加`display:flex;`,此方法会破坏父元素的盒子模型，对其内的元素容易造成副作用，小心使用。

   - 方法一（适合控制多个子元素）： 给父元素添加`justify-content:center`样式

   * 方法二（推荐）： 给元素自身添加`margin-left:auto;margin-right:auto`样式。

## text-align:center 居中布局案列

1. 父元素设置此样式，其内部的所有内联和内联块状的子孙元素都会水平居中布局，且会继承此样式。适合用在设置大量的文本，图片水平居中布局。

## 垂直居中布局

1. 给父元素设置`display:table-cell;vertical-align:middle`。需要给父元素设置一个固定高度。此方法是模拟`table`表格垂直居中的布局方式

2. 父元素设置`display:flex`,要求父元素有固定的高度;

   - 方法一（要求子元素有固定的高度）：子元素设置`margin-top:auto;margin-bottom:auto;`。

   - 方法二：父元素设置`align-self:center;`

   * 方法三：（要求子元素有固定的高度）：父元素设置`align-items:center`

## 水平垂直居中

布局元素结构

```html
<body>
  <div class="parent">
    <div class="child"></div>
  </div>
</body>
```

方法一. 通过元素`position`定位

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
```

方法二. 通过`flex`布局

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  height: 100px; // 根据用例场景设置，这里假设为`100px`
}
```

或

```css
.parent {
  display: flex;
}

.child {
  height: 100px;
  margin: auto;
}
```

方法三 模拟表格（父元素需要宽高值）

```css
.parent {
  width: 100%;
  height: 100%; // 根据实际应用场景设置具体值
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

方法四 父元素设置`padding`

```css
.parent {
  padding: 200px; // 根据实际应用场景设置具体值
}
.child {
  display: block;
}
```
