function flipCoin() {
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    return result;
}

console.log(flipCoin());