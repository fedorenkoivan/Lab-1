const array = ["meow", null, false, "", 1488, "hello", " ", 45, 1, 0, NaN, undefined, {}, {n:1}];
const obj = {}

const sortByType = (array) => {
    for(const elem of array){
        const type = typeof elem;
        if( isNaN(obj[type]) ) obj[type] = 0;
        obj[type] += 1;
    }
    return array;
}

sortByType(array);

console.dir({obj});