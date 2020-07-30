class Dep {
  constructor() {
    this.subs = [];
  }

  depend() {
    if (Dep.target && !this.subs.includes(Dep.target)) {
      this.subs.push(Dep.target);
    }
  }

  notify() {
    this.subs.forEach((fn) => fn());
  }
}

const data = {
  price: 10,
  quantity: 3,
};

let totalPrice = 0;

for (let key in data) {
  const dep = new Dep();
  let value = data[key];

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return value;
    },
    set(newVal) {
      if (value === newVal) return;

      value = newVal;

      dep.notify();
    },
  });
}

function watch(exp, fn) {
  Dep.target = fn;
  Dep.target.value = exp();
  Dep.target = null;
  //   return result;
}

let computedPrice = watch(
  () => {
    //   console.log(data.price, data.quantity);
    return data.price * data.quantity;
  },
  () => {
    console.log("data.price * data.quantity=>", data.price * data.quantity);
  }
);

// data.price = 10;
data.quantity = 30;
data.price = 1;
// console.log(totalPrice);

// data.quantity = 32;

// console.log(totalPrice);
