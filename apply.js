function test(arg1, arg2, arg3) {
    console.log(this, arg1, arg2, arg3);
}

let user = {
    nam: 'pc',
    age: 23,
}

let args = [1, 2, 3];

// test(args[0], args[1], args[2]);
test(...args);

test.call(user, ...args);

test.apply(user, args);

// in form array or object

// functionName(...args);

// functionName.apply(obj,args);