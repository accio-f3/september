// call method is used for explicit binding

let user = {
    nam: 'pc',
    age: 23,
}

function test(test1, test2) {
    nam = test1;
    console.log(this, test1, test2);
}

test('this is my test1', 'this is my test2');

// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');
// test.call(user, 'this is arg1 is for call', 'this is arg2 is for call');

// this is my normal function invocation
// functionName(arg1,arg2);
// functionName.call(obj,arg1,arg2);

