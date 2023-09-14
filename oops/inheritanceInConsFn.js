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

function CreateCurrentAccount(nam, branch, accountBalance) {
    // this.nam = nam;
    // this.branch = branch;
    // this.accountBalance = accountBalance;
    this.withdrawLimit = 500000; // 5 lakhs
}

// CreateCurrentAccount.prototype.withdraw = function (amount) {
//     this.accountBalance -= amount;
// }
// CreateCurrentAccount.prototype.businessLoan = function (amount) {
//     console.log(`you are eligible for this ${amount} of loan`);
// }