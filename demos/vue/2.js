const data = {
  firstName: "kong",
  lastName: "lingwen",
};

function watch(expOrFn, fn) {
  walk();
  target = fn;

  let obj = data;
  let pathArr;
  if (typeof expOrFn === "function") {
    fn.value = expOrFn();
    return;
  }
  if (/\./.test(".")) {
    pathArr = expOrFn.split(".");

    pathArr.forEach((key) => (obj = obj[key]));

    return;
  }

  data[expOrFn];
}

function walk() {
  Object.keys(data).forEach((key) => {
    const dep = [];
    let val = data[key];

    Object.defineProperty(data, key, {
      get() {
        dep.push(target);
        return val;
      },
      set(newVal) {
        dep.forEach((fn) => {
          if (fn.value) {
            fn(fn.value,fn.oldValue);
            return;
          }
          return fn(newVal, val);
        });

        val = newVal;
      },
    });
  });
}

watch(
  () => {
    return data.firstName + data.lastName;
  },
  (newVal, oldVal) => {
    console.log(`${newVal}--${oldVal}`);
  }
);

data.firstName = "kongling";
data.lastName = "33";
