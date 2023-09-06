// a magical function that takes
// function and object and gives me a 
// new function that is binded with object

let obj = {
    nam: 'piyush',
}

// function sayHello(age,profession){
//     console.log(this);
//     console.log(age,profession);
// }

// sayHello(12, 'gamer');
// sayHello.call(obj, 12, 'gamer');
// sayHello.call(obj, 13, 'vlogger');
// sayHello.call(obj, 14, 'chef');

// call,apply and bind
// call and apply were invoking my functions
// bind returns me a new function that's binded with
// my obj;

// let newBindedFn = sayHello.bind(obj,29);

// sayHello.call(obj, 13, 'vlogger');
// newBindedFn(13,'vlogger');



function test(arg1, arg2, arg3) {
    console.log(this, arg1, arg2, arg3);
}

// this is my modified binded fn
let bindedFn = test.bind(obj, 'fix 1');

bindedFn('testing1', 'testing 2', 'testing 3');

bindedFn('test1', 'test2', 'test3');

// final structure
// function bindedFn(arg2, arg3) {

// }


// Sir rest jo bach gya wo kahi memory m
//  hoga na ...ya fir delete hojayega

// function abc(){
//     console.log(arguments);
// }

// abc(1,2,3);