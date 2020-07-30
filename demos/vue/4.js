const data = {
  price: 10,
  quantity: 1,
};
let price = data.price;
let quantity = data.quantity;
let totalPrice = price * quantity;

let target = null;

Object.keys(data).forEach((key) => {
  const dep = [];
  let val = data[key];
  const descriptor = {
    get: function reactiveGetter() {
      if (!dep.includes(target) && target) {
        dep.push(target);
      }
      return val;
    },
    set(newVal) {
      dep.forEach((fn) => fn(newVal, val));
      val = newVal;
    },
  };

  descriptor.get.dep = descriptor.set.dep = dep;
  Object.defineProperty(data, key, descriptor);
});

function unwatch(key, fn) {
  const dep = data.__lookupGetter__(key).dep;

  if (arguments.length === 1 && typeof key === "string") {
    dep.length = 0;
    return;
  }

  dep.splice(dep.indexOf(fn), 1);
}
function watch(key, fn) {
  target = fn;
  data[key];
  target = null;

  return unwatch;
}

function fn(newPrice, oldPrice) {
  console.log(`newPrice  ${newPrice}`);
  console.log(`oldPrice  ${oldPrice}`);
}

watch("price", (newPrice, oldPrice) => {
  console.log(`newPrice  ${newPrice}`);
  console.log(`oldPrice  ${oldPrice}`);
});
watch("price", fn);

watch("price", (newPrice, oldPrice) => {
  console.log(`newPrice  ${newPrice}`);
  console.log(`oldPrice  ${oldPrice}`);
});
// watch("price", () => {
//   console.log(`newPrice  ${newPrice}`);
// });
unwatch("price", fn);

data.price = 1;
// console.log(data);
