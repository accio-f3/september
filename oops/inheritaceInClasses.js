class SavingsAccount {
    constructor(nam, bank, accountBalance) {
        this.nam = nam;
        this.bank = bank;
        this.accountBalance = accountBalance;
    }
    withDraw(amount) {
        this.accountBalance -= amount;
    }
}

class CurrentAccount extends SavingsAccount {
    constructor(nam, bank, accountBalance, withDrawLimit) {
        super(nam, bank, accountBalance);
        this.withDrawLimit = withDrawLimit
    }
    // withDraw(amount) {
    //     this.accountBalance -= amount;
    // }
    businessLoan(amout) {
        console.log(`you have been granted ${amout}`);
    }
}

const customer1 = new CurrentAccount('pc', 'icici', 5000, 10000);

