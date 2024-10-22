function inc(obj) {
    return obj.n++;
}

const obj = { n: 5, text: "Some text" };
const anotherboringobj = { text: "Lorem ipsum", N: 2, n: 10 };

inc(obj);
inc(anotherboringobj);

console.dir({ obj, anoth });