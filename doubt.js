function CreateSavingsAccount(nam, branch, accountBalance) {
    this.nam = nam;
    this.branch = branch;
    this.accountBalance = accountBalance;
}

CreateSavingsAccount.prototype.withdraw = function (amount) {
    this.accountBalance -= amount;
}

function CreateCurrentAccount(nam, branch, accountBalance, withdrawLimit) {
    // THIS keyword inside "CreateCurrentAccount" will be pointing towards the newly formed object
    CreateSavingsAccount.call(this, nam, branch, accountBalance);
    this.withdrawLimit = withdrawLimit; // 5 lakhs
}
// CreateCurrentAccount.prototype.__proto__ = CreateSavingsAccount.prototype;
CreateCurrentAccount.prototype = CreateSavingsAccount.prototype;

CreateCurrentAccount.prototype.businessLoan = function (amount) {
    console.log(`you are eligible for this ${amount} of loan`);
}

const customer1 = new CreateSavingsAccount('pc','icici',200);
const customer2 = new CreateCurrentAccount('pc','icici',10000,5000);

const customer3 = new CreateSavingsAccount('savings test','sbi',500);