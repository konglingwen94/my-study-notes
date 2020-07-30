const o = {};

const descriptor = {
  a: 3,
//   value:3,
  get(){
      return 3
  }
};

Object.defineProperty(o, "a", descriptor);


console.log(Object.getOwnPropertyDescriptor(o,'a'))