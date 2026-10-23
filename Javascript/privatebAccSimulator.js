function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log("Balance: " + balance);
            }
        },

        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log("Balance: " + balance);
            } else {
                console.log("Insufficient balance");
            }
        }
    };
}

let account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);