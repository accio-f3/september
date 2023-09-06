// this.a = 5;
// console.log(this);
// console.log(this.a);
// console.log(window.a);

// this.a = 5;

// function test() {
//     console.log(this);
// }

// why this keyword inside test
// is pointing towards window?

// implicit binding -> when you call a
// fn with . notation

// this.a = 5;

// // this keyword will point
// // towards this keyword of
// // outer normal function
// // if it's not there
// // it will point towards window
// const test = () => {
//     console.log(this);
// }

// function abc(){
//     const arrowTest = () =>{
//         // value of this keyword 
//         // in arrowTest will be equal to
//         // value of this keyword
//         // of abc
//     }
// }

// test();

// let user = {
//     nam: 'pc',
//     age: 23,
//     getDetails(){
//         console.log(this);
//     }
// }

// user.getDetails();


// let user = {
//     nam: 'prikshit',
//     age:23,
//     childObj:{
//         newName:'pc',
//         nam: 'vikas',
//         getDetails(){
//             let nam='test';
//             console.log(this.newName, " and " , this.nam, nam);
//         }
//     }
// }

// user.childObj.getDetails();

// let user ={
//     nam:'Prikshit',
//     age:23,
//     getDetails:()=>{
//         console.log(this);
//     }
// }

// user.getDetails();

// let user = {
//     nam: 'Prikshit',
//     age: 23,
//     childObj: {
//         newName: 'pc',
//         getDetails: () => {
//             console.log(this);
//         }
//     }
// }

// user.childObj.getDetails();

// let user = {
//     nam:'pc',
//     age: 23,
//     getDetails(){
//         // this keyword inside getDetails
//         const nestedArrow = () => console.log(this);
//         nestedArrow();
//     }
// }

// user.getDetails();

// const user = {
//     firstName: 'pc',
//     getName(){
//         const firstName='prikshit';
//         return this.firstName;
//     }
// }

// console.log(user.getName());

// function makeUser() {
//     return {
//         nam: 'pc',
//         ref: this,
//     }
// }

// let user = makeUser();

// // user = {
// //     nam: 'pc',
// //     ref: this,
// // }

// console.log(user.ref); // console.log(this)

// console.log(this);

// function makeUser(){
//     return {
//         nam:'pc',
//         ref(){
//             return this;
//         }
//     }
// }

// let user = makeUser();

// console.log(user.ref());

// const user = {
//     nam: 'pc',
//     logMessage(){
//         console.log(this);
//     }
// }

// setTimeout(user.logMessage,1000);

// setTimeout(()=>{
//     user.logMessage();
// },1000);

// obj.fn()


// let testFn = obj.fn;


// window.testFn();

// let user = {
//     nam:'pc',
//     age: 23,
//     getDetails(){
//         // any this keyword inside getDetails
//         // is user object
//         const nestedArrow = function abc(){ 
//             console.log(this);
//         };
//         nestedArrow();
//     }
// }

// user.getDetails();

// for normal functions
// always look for
// obj.fn() (the answer most probably is obj)


// let user = {
//     nam:'pc',
//     age: 23,
//     getDetails(){
//         // any this keyword inside getDetails
//         // is user object
//         const nestedArrow = () => { 
//             console.log(this);
//         };
//         nestedArrow();
//     }
// }

// user.getDetails();

// for arrow fns always look for outer normal fn
// and then find the this keyword of outer normal
// fns