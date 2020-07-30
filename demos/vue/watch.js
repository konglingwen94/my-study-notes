const obj = {
  msg: "data",
  nested: {
    key: 1,
  },
};

function watch(obj, exprOrFn, cb) {
  const callbacks = [];
  let pathArr;
  if (/\./.test(exprOrFn)) {
    pathArr = exprOrFn.split(".");
  } else {
    pathArr = [exprOrFn];
  }

  console.log(pathArr);
  let oldVal = pathArr.reduce((prev, current) => {
    return prev[current];
  }, obj);

  let targetObj = pathArr.slice(0, -1).reduce((prev, current, index) => {
    return prev[current];
  }, obj);

  let targetKey = pathArr[pathArr.length - 1];

  let descriptor = {
    callbacks: [],
    get() {
      // 收集依赖
      descriptor.callbacks.push(cb);
      console.log("dependency as cbs", descriptor.callbacks);
      return oldVal;
    },
    set(newVal) {
      // 触发更新
      descriptor.callbacks.forEach((cb) => cb(newVal, oldVal));
      debugger;
      oldVal = newVal;
    },
  };

  // const descriptor = ;

  // descriptor.callbacks = [];

  Object.defineProperty(targetObj, targetKey, descriptor);
  targetObj[targetKey];
  debugger
    console.log(descriptor.callbacks);
}

watch(obj, "nested.key", function(val, oldVal) {
  console.log("oldVal: ", oldVal);
  console.log("val: ", val);
});
watch(obj, "nested.key", function(val, oldVal) {
  console.log("oldVal: ", oldVal);
  console.log("val: ", val);
});

obj.nested.key = 10;
// obj.nested.key = 1;
// obj.nested.key = 10;
