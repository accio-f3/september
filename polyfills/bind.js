// delete Function.prototype.bind;

// // BIND polyfill
// Function.prototype.bind = function (obj, ...fixedArgs) {
//     // we are saving intro defi in oldFn through this keyword
//     const oldFn = this;
//     // whenever my newFunc is invoked -> ?????
//     const newFunc = function (...nonFixedArgs) {
//         // I have my object (obj)
//         // I have my oldFn
//         // arguments -> ...fixedArgs,...nonFixedArgs
//         // return oldFn.call(obj, ...fixedArgs, ...nonFixedArgs);
//         obj.tempFunc= oldFn;
//         const ans = obj.tempFunc(...fixedArgs,...nonFixedArgs);
//         delete obj.tempFunc;
//         return ans;
//     }
//     return newFunc;
// }

// whatever my oldFn would have returned with
// obj as context this is what I want this newFunc
// should return

let obj = {
    nam: 'pc',
    age: 23
}

function intro(city1,city2){
    console.log(this);
    return `Hi I am ${this.nam} and my city1 is ${city1} and my city2 is ${city2}`;
}

// newIntro is modified version of intro
const newIntro = intro.bind(obj,'delhi');

console.log(newIntro('werty'));

console.log(newIntro('asdfgh'));

// modified function is calling
// .call internally
// function test(...restArgs){
//     console.log(...restArgs);
// }
// test(1,2,3,4);
// newFunc();
// oldFunc.call(obj);



delete Function.prototype.bind;

Function.prototype.bind = function (object, ...fixedArgs) {
    const oldFn = this;
    const newFunc = function (...nonFixedArgs) {
        return oldFn.call(obj, ...fixedArgs, ...nonFixedArgs);
    }
    return newFunc;
}