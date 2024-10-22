const array = ["meow", null, false, "", 1488, "hello", " ", 45, 1, 0, NaN, undefined, {}, {n:1}];
const obj = {
    string: 0,
    number: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
}

const sortByType = (array) => {
    for(const elem of array){
        const type = typeof elem;
        switch(type){
            case 'number':
                obj.number++;
                break;
            case 'boolean':
                obj.boolean++;
                break;
            case 'string':
                obj.string++;
                break;
            case 'object':
                obj.object++;
                break;
            case 'undefined':
                obj.undefined++;
                break;
        }
    }
    return array;
}

sortByType(array);

console.dir({obj});