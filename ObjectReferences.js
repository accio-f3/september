// let c = {
//     greetings: 'Namaste',
// }

// let d = c;

// c.greetings = 'Hello';

// console.log(d);

// let person = {
//     nam: 'pc',
// }

// const members = [person];

// person.nam = null;

// console.log(members);

// I have a small doubt, if we call a 
// regular function with .this then it 
// will show window properties, but 
// there is also a keyword called "use strict " 
// the it will not point to global ri8?


// let person = {
//     nam: 'pc',
// }

// const members = person;

// person.nam = null;

// console.log(members);


// Object Cloning

// // 1. spread
// let obj1 = {
//     a:10,
// }

// let newObj = {
//     ...obj1,
// }

// newObj.a = 200;
// // deep copy -> ❌

// // 2. assigning
// let newObj2 = obj1;
// newObj2.a = 70;
// // this is for sure
// // shallow copy

// console.log(obj1);
// console.log(newObj);
// console.log(newObj2);

// shallow copy and deep copy -> ????
// when you are trying to clone any object
// and the new object has reference of old object
// then it is shallow copy
// 
// // when you are trying to clone any object
// and the new object has no reference of old object
// then it is deep copy

// let obj = {
//     a: 10,
//     b: {
//         c: 100,
//     }
// }

// let newObj = {
//     ...obj,
// }

// newObj.a = 100;
// newObj.b.c = 200;

// console.log(obj);
// console.log(newObj);


// obj -> string


// 3. using JSON.parse(JSON.stringify)

// let obj = {
//     a: 10,
//     b: {
//         c: 100,
//     }
// }

// // this will convert my Object to string
// let objString = JSON.stringify(obj);

// // this will convert my string back to obj
// let newObj = JSON.parse(objString);

// newObj.a=100
// newObj.b.c=200;

// console.log(obj);
// console.log(newObj);


// 4. Deep Clone -> we will make ourself