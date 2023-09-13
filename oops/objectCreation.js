const customer1 = {
    nam: 'ajay',
    accountBalance: 10000,
    bank: 'HDFC',
    addMoney: function (amount) {
        this.accountBalance = this.accountBalance + amount;
    }
}

console.log(customer1);
customer1.addMoney(500);
console.log(customer1);

const customer2 = {
    nam: 'Kalim',
    accountBalance: 5000,
    bank: 'SBI',
    addMoney: function (amount) {
        this.accountBalance = this.accountBalance + amount;
    }
}