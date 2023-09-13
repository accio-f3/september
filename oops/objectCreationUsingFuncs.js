function createCustomer(nam, branch, accountBalance) {
    const customer = {}; // customer is an instance
    // of Object Class
    customer.nam = nam;
    customer.branch = branch;
    customer.accountBalance = accountBalance;
    customer.withdraw = function (amount) {
        customer.accountBalance -= amount;
    }
    return customer;
}
const customer1 = createCustomer('jerico', 'sbi xyz', 10000);

console.log(customer1);

const customer2 = createCustomer('Tez', 'icic abc', 100000);
console.log(customer2);
