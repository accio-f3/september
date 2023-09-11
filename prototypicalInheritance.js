// Inheritance is like one object
// trying to access properites &
// methods of another



// then it will search in obj.__proto__


let obj1 = {
    // nam: 'pc',
    // city: 'blr',
    // getDetails() {
    //     console.log(`Hi I am ${this.nam} and from ${this.city}`);
    // }
}

let obj2 = {
    nam: 'prikshit',
    city: 'delhi',
    getDetails() {
        console.log(`Hi I am ${this.nam} and from ${this.city}`);
    }
}

obj1.__proto__ = obj2;


obj1.getDetails();
