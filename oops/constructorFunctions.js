// make first letter of constructor func as CAPS
function CreateCustomer(nam,branch,accountBalance){

}
// new key work handles 'new' memory creation

const customer = new CreateCustomer('pc','hdfc',200);
console.log(customer.__proto__);




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