delete Array.prototype.reduce;
// // map -> mapping
// // filter -> filtering out
// // reduce 
// // array of elements -> element

// let arr = [1, 2, 3, 4];

// let initialValue = 0;

// // // initialValue -> sumSoFar -> accumulator

// // for (let i = 0; i < arr.length; i++) {
// //     initialValue = initialValue + arr[i];
// // acc = callback(acc,element);
// // }

// // console.log(initialValue);

// // initialValue
// //   iteration     before  after
// //      0            0       1
// //      1            1       
// function callback(acc, element) {
//     return acc + element;
// }

// // acc = callback(acc,element);

// let sum = arr.reduce(callback,initialValue);
// console.log(sum);

// reduce expects 2 things
// 1st is callback -> logic that executes after every iteration
// 2nd is initialValue

// why callback??


Array.prototype.reduce = function(callback,initialValue){
    let accumulator = initialValue;
    // either it will be having a number
    // or it will be undefined
    for(let i=0;i<this.length;i++){
        if(accumulator===undefined){
            accumulator = this[i];
        }
        else {
            accumulator = callback(accumulator, this[i], i);
        }
    }
    return accumulator;
}

// let arr = [6, 5, 2, 3, 1];

// if you are passing initialValue
// const sum = arr.reduce((accumulator, currentElement, index) => {
//     console.log('index -->', index, ' ', 'accumulator--> ', accumulator, ' ', 'currentElement-->', currentElement);
//     return accumulator + currentElement;
// }, 0);

// what happens if we don't pass initialValue

// const sum = arr.reduce((accumulator, currentElement, index) => {
//     console.log('index -->', index, ' ', 'accumulator--> ', accumulator, ' ', 'currentElement-->', currentElement);
//     return accumulator + currentElement;
// });

// if we don't pass any initialValue-> it will not execute logic
// it will just assign accumulator the value of 0th element of array


// var arr = [{ x: 1 }, { x: 2 }, { x: 4 }];
// var result = arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
// console.log(result);  // 7


// function callback(acc,currentElement){
//     // if(currentElement) is an object
//     // else if it's a number
// }

// https://codeburst.io/how-to-reduce-array-to-a-single-type-11cfe2bcae66