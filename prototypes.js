let arr = new Array();

arr.push(1);
arr.push(2);
arr.push(3);
// arr is an array
// arr is an object
// Array is a function
// Array is object

// Array -> fn + Object

let obj = {
    a: 10,
}

// obj.__proto__ is Object.prototype
// obj.__proto__.__proto__ is null
// arr.__proto__ is  Array.prototype

// gibbrish.__proto__ === random.prototype
// if the above line is true that means
// gibbrish is instance of random

// arr -> Array -> Object -> null
// abc(fn) -> Function -> Object -> null

// function abc(){

// }


