function checkLoan(salary, creditScore, vipCode) {
    if ((salary > 30000 && creditScore > 600) || vipCode) {
        return "Loan Approved";
    } else {
        return "Loan Rejected";
    }
}

console.log(checkLoan(25000, 500, true));