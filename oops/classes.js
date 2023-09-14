class CreateCustomer {
    constructor(nam, bank, accountBalance) {
        this.nam = nam;
        this.bank = bank;
        this.accountBalance = accountBalance;
        // never ever write common properties inside
        // constructor functions
        // this.withdraw = function (amount) {
        //     this.accountBalance -= amount;
        // }
    }
    withdraw(amount) {
        this.accountBalance -= amount;
    }
}
// CreateCustomer.prototype.test='testing';

const customer1 = new CreateCustomer('amir', 'swiss bank', 10000000);
// Constructor fn is the first fn that is called
// inside object that is formed using class


const customer2 = new CreateCustomer('pc', 'hdfc', 200);
console.log(customer2);
customer2.withdraw(50);

// console.log(customer1);
console.log(customer2);