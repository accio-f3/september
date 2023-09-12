delete Function.prototype.apply;

Function.prototype.apply = function (obj, argsArray) {
    // this has function defi
    // it will attach function defi to my obj
    obj.tempFunc=this;
    const ans = obj.tempFunc(...argsArray);
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

console.log(sum(1, 2));

console.log(sum.apply(obj,[1,2]));

console.log(obj);

