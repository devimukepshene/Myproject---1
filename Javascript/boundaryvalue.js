function checkDiscount(amount) {
    if (amount >= 50 && amount <= 100) {
        return "10% Discount";
    } else {
        return "No Discount";
    }
}

console.log(checkDiscount(75));