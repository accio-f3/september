class BankAccount {
    // you can write properties
    // outside the constructor fn as well
    // for private property you'll have to declare outside constructor
    // fn
    #accountBalance;
    constructor(nam, bank, accountBalance) {
        this.nam = nam;
        this.bank = bank;
        this.#accountBalance = accountBalance;
    }
    // with # no one will be able to access
    // this property outside this class
    // by using getter I can't manipulate my 
    // private property

    // getter
    getAccountBalance() {
        return this.#accountBalance;
    }
    // inside it will appear as a method
    // it will not accept any argument
    get balance() { // this is better as compared to the above method
        return this.#accountBalance;
    }
    // setter
    addMoney(amount, bankEmployeePin) { // this is a better setter
        if (bankEmployeePin === '6280') {
            this.#accountBalance += amount;
        }
        else {
            console.log('notes are fake');
        }
    }
    // through this `set` keyword I can't accept passwords
    set balance(amount) {
        this.#accountBalance += amount;
    }
}
// outside get method will act as property
const customer1 = new BankAccount('pc', 'icici', 500);


console.log(customer1.balance);
console.log(customer1.getAccountBalance());

// any method that's written using 'set' keyword
// will accept only 1 argument
// because outside the class it has to act as property

