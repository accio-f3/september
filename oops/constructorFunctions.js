// make first letter of constructor func as CAPS
function CreateCustomer(nam, branch, accountBalance) {
    this.nam = nam;
    this.branch = branch;
    this.accountBalance = accountBalance;
    // this.withdraw = function (amount) {
    //     this.accountBalance -= amount;
    // }
}
// new key work handles 'new' memory creation
CreateCustomer.prototype.withdraw = function (amount) {
    this.accountBalance -= amount;
}

const customer1 = new CreateCustomer('pc', 'hdfc', 200);
console.log(customer1);
const customer2 = new CreateCustomer('amir', 'icici', 20000);
console.log(customer2);


// a new memory is created
// and constructor function is called
// as a method of this new memory




// function createCustome(nam, branch, accountBalance) {
//     const customer = {}; // customer is an instance
//     // of Object Class
//     customer.nam = nam;
//     customer.branch = branch;
//     customer.accountBalance = accountBalance;
//     customer.withdraw = function (amount) {
//         customer.accountBalance -= amount;
//     }
//     return customer;
// }
// const customer1 = createCustome('jerico', 'sbi xyz', 10000);

// console.log(customer1.__proto__);


// an object that is created using
// normal function is having proto of
// Object.prototype

// and if we use new keyword
// it will be having diff proto