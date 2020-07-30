const data = {
  price: 10,
  quantity: 2,
};

let totalPrice = 1;
let target;

for (let key in data) {
  const dep = [];
  let value = data[key];

  Object.defineProperty(data, key, {
    get() {
      if (!dep.includes(target) && target) dep.push(target);
      return value;
    },
    set(newVal) {
      value = newVal;
      dep.forEach((fn) => fn());
 
    },
  });
}

function watch(fn) {
  target = fn;
  target();
  // target = null;
}

watch(() => {
  totalPrice = data.price * data.quantity;
});

watch(()=>{
  console.log(data.price*1.34)
})

console.log(totalPrice);
data.price = 110;
console.log(totalPrice);
