delete Function.prototype.call;

// here it's rest operator
Function.prototype.call = function (obj, ...args) {
    // you want to attach a function
    // with obj object
    // this keyword will be storing my fn defi
    // I need to attach my function (this keyword is storing it)
    // to my object
    obj.tempFunc = this;
    // args -> [1,2]
    // args -> [1,2,3,4]
    // here it's spread operator
    const ans = obj.tempFunc(...args);
    delete obj.tempFunc;
    return ans;
}

let obj = {
    a: 10,
    b: 20,
}

function sum(arg1, arg2) {
    console.log(this);
    return arg1 + arg2;
}

// // Function.prototype.test = function () {
// //     console.log(this);
// //     console.log('hello udhbhav');
// // }

console.log(sum(1, 2));

console.log(sum.call(obj, 1, 2));

console.log(obj);

// randomFn.call


// function test(arg1, arg2, ...args) {
//     console.log(args);
// }

// test(1, 2, 3, 4, 5, 6, 7, 8, 9);


// spread operator -> spreads content
// rest operator -> combines it 
// can be used only inside function argument


// let arr= [1,2,3];

// let arr2 = [...arr];


// function sum(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
// }

// function modifiedSum(...args){
//     console.log(args);
//     return sum(...args);
// }

// modifiedSum(1,2,3,4,5);
