let dep = { name: "dep" };
let newDep = { name: "newDep" };

// let temp = dep;

// dep = newDep;
// newDep = temp;
[dep, newDep] = [newDep, dep];

console.log(`dep ${dep.name}`);
console.log(`newDep ${newDep.name}`);
