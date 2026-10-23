function add(a, b) {
    return a + b;
}

function createAdder(a) {
    return function(b) {
        return a + b;
    };
}

console.log(add(10, 20));

let addFive = createAdder(5);
console.log(addFive(10));