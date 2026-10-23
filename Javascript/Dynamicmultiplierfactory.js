function multiplierFactory(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplierFactory(2);
let triple = multiplierFactory(3);

console.log(double(5));
console.log(triple(5));