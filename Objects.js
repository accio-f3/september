// Objects -> ????
// collection of Properties
// collection of key value pairs

// property -> key value

// Defi
// Object -> An object is collection of properties
// and a property is an association of key and value.
// in case when a property is a function it's known as
// method of that function

// Delete keyword
// const user = {
//     nam: 'pc',
//     age: 23,
// }
// console.log(user);
// delete user.nam;
// console.log(user);

// // key with spaces

// const user = {
//     nam: 'pc',
//     age: 23,
//     // workAtWalmart: true,
//     'work at walmart': true,
// }

// console.log(user['age']);

// // Dynamic Keys
// const property = 'firstName';
// const nam = 'pc';

// const user = {
//     firstName: 'pc',
// }

// const user_mid = {
//     property: nam,
// }

// const user2 = {
//     [property]: nam,
// }

// // key name here is still property
// // firstName
// console.log(user);
// console.log(user_mid);
// console.log(user2);

// looping through objects

// const user = {
//     nam: 'pc',
//     age: 23,
//     isWorking: true,
// }

// for (key in user) {
//     // it's converting my keys into string
//     // so we can't use user.key
//     console.log(key, '--->', user[key]);
// }

// key repetition
// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three',
//     c: 'four'
// }

// {
// a -> three
// b -> two
// c -> four
// }

// console.log(obj);

// I have one doubt key will give
// the first child of the object[We passed] 
// in the DOM tree, like if we loop the key 
// to the user it will give the nam,age,isWorking. 
// and if we loop in the key in the user[key], 
// then it is giving the values as pc,23,true.


// storing objects in local storage

// /// saving things in local storage
// localStorage.setItem('obj',JSON.stringify(obj));

// localStorage.setItem('keyName','value in string');


// JSON. parse vs JSON.stringify
// let objString = JSON.stringify(obj);

// console.log(obj);
// console.log(objString);

// // objString back to obj ??

// const obj2 = JSON.parse(objString);
// console.log(obj2);

// const user = {
//     nam: 'pc',
//     age:23,
// }

// const admin = {
//     admin: true,
//     ...user,
// }

// console.log(user);
// console.log(admin);

// const adminFinal = {
//     admin: true,
//     nam: 'pc',
//     age:23,
// }

// spread operator makes deep copy -> wrong 