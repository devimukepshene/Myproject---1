function classifyNumber(num) {
    if (num >= 0 && num <= 10) {
        return "Small";
    } else if (num >= 11 && num <= 20) {
        return "Medium";
    } else if (num >= 21 && num <= 30) {
        return "Large";
    } else {
        return "Invalid Number";
    }
}

console.log(classifyNumber(15));