const inc = (number) => ++number;

let a = 5;
a = inc(a);
const b = inc(a);

console.dir({a, b});