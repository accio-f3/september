let arr1 = [
  { a: 1, b: 2 },
  { a: 2, b: 1 },
];

let arr2 = [
  { a: 1, b: 1 },
  { a: 1, b: 2 },
];

let arr3 = [
  { a: 2, b: 1 },
  { a: 1, b: 2 },
];

function filterLogic(referenceArrayObj, otherArrays, compFn) {
    // otherArrays = [arr2,arr3];
    // otherArray -> arr2;
    // otherArray -> arr3;
    return otherArrays.every((otherArray) =>
      otherArray.some((otherArrayObj) => compFn(referenceArrayObj, otherArrayObj))
    );
}

function intersectionWith(comp, ...restArrays) {
  if (!restArrays.length) return [];
  const referenceArray = restArrays[0]; // arr1;
  const otherArrays = restArrays.slice(1); // [arr2,arr2];
  const result = referenceArray.filter((referenceArrayElement) =>
    filterLogic(referenceArrayElement, otherArrays, comp)
  );
  return result;
}

const res = intersectionWith(
  (obj1, obj2) => obj1.a === obj2.a && obj1.b === obj2.b,
  arr1,
  arr2,
  arr3
);

console.log(res);

// function test(...args){
//   // args -> [arr1,arr2,arr3,comp];
//   // comp -> args[args.length-1];
// }


// arr1.filter(()=>{
//     // write a condition
// })

// 72

// some -> takes in a callback function where you can write your 
// own logic to determine if an array contains some element which 
// matches the conditions you wrote.

// includes -> does a generic equalTo comparison on every element 
// and will return true if at least one element in the array is equal 
// to the value to find.
