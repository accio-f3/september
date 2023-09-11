// map -> mapping
// filter -> filtering out
// reduce 
// array of elements -> element

let arr = [1, 2, 3, 4];

let initialValue = 0;

// // initialValue -> sumSoFar -> accumulator

// for (let i = 0; i < arr.length; i++) {
//     initialValue = initialValue + arr[i];
// acc = callback(acc,element);
// }

// console.log(initialValue);

// initialValue
//   iteration     before  after
//      0            0       1
//      1            1       
function callback(acc, element) {
    return acc + element;
}

// acc = callback(acc,element);

let sum = arr.reduce(callback,initialValue);
console.log(sum);

// reduce expects 2 things
// 1st is callback -> logic that executes after every iteration
// 2nd is initialValue

// why callback??