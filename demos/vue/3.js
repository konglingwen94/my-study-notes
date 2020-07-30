function observe(obj) {
  let target = null;
  const prototype = {
    watch(key, fn) {
      target = fn;
      const dep = [];
      let value = obj[key];

      let descriptor = Object.getOwnPropertyDescriptor(obj, key);



      Object.defineProperty(obj, key, descriptor);
      obj[key];

      return function() {
        const delIndex = dep.findIndex((item) => item === fn);
        dep.splice(delIndex, 1);
      };
    },
    unwatch(key, fn) {},
  };
  Object.setPrototypeOf(obj, prototype);
}

const data = {
  firstName: "kong",
};

observe(data);

const unwatch = data.watch("firstName", (newVal, oldVal) => {
  console.log(`newVal is ${newVal}`);
  console.log(`oldVal is ${oldVal}`);
});

data.firstName = "wen";
// debugger;
// data.watch();
