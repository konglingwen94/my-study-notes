const data = {
  a: "1",
};

let oldVal = data.a;
async function walk() {
  Object.defineProperty(data, "a", {
    get() {
      dep.push(target);
      return oldVal;
    },
    set(newVal) {
      dep.forEach((fn) => fn(newVal, oldVal));
      oldVal = newVal;
    },
  });

}

const dep = [];
let target = null;

function watch(exp, fn) {
  walk()
  target = fn;
  data[exp];
}

watch("a", (newVal, oldVal) => {
  console.log("a is changed");
  console.log(newVal, oldVal);
});
watch("a", (newVal, oldVal) => {
  console.log("a is changed");
  console.log(newVal, oldVal);
});

data.a = 3;
data.a = 5;
