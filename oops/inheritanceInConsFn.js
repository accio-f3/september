// 2 types of blueprints
// currentAccount -> business purpose
// savingAccount -> normal day to day activities

function CreateSavingsAccount(nam, branch, accountBalance) {
    this.nam = nam;
    this.branch = branch;
    this.accountBalance = accountBalance;
}

CreateSavingsAccount.prototype.withdraw = function (amount) {
    this.accountBalance -= amount;
}

function CreateCurrentAccount(nam, branch, accountBalance, withdrawLimit) {
    // this.nam = nam;
    // this.branch = branch;
    // this.accountBalance = accountBalance;
    // THIS keyword inside `CreateCurrentAccount` will be pointing towards
    // the newly formed object
    // CreateSavingsAccount(nam, branch, accountBalance); -> here the function will point towards window
    CreateSavingsAccount.call(this, nam, branch, accountBalance);
    this.withdrawLimit = withdrawLimit; // 5 lakhs
}
CreateCurrentAccount.prototype.__proto__ = CreateSavingsAccount.prototype;
// CreateCurrentAccount.prototype.withdraw = function (amount) {
//     this.accountBalance -= amount;
// }

CreateCurrentAccount.prototype.businessLoan = function (amount) {
    console.log(`you are eligible for this ${amount} of loan`);
}

const customer1 = new CreateCurrentAccount('pc','icici',200,5000);
