let arr = [1, 2, [3, 4, 5], [6, 7, [8, 9]]];
// for arr -> 1
// [3,4,5]

// flat is inbuilt method
// myFlat is polyfill of flat
// 1
// 2
// [3, 4, 5]
// [6, 7, [8, 9]] -> [6,7,8,9]
// three types of elements

// 1 -> normal number
// 2 -> normal array
// 3 -> with some depth array

// flat without depth concept
// function myFlat(arr) {
//   let result = [];
//   arr.forEach((element) => {
//     // element can be an array or a number
//     if (Array.isArray(element)) {
//         // element can be flattened array
//         // or with some depth
//         const miniAns = myFlat(element);
//         result.push(...miniAns);
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

function myFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((element) => {
    // element can be an array or a number
    if (Array.isArray(element) && depth > 0) {
      // element can be flattened array
      // or with some depth
      const miniAns = myFlat(element, depth - 1);
      result.push(...miniAns);
    } else {
      result.push(element);
    }
  });
  return result;
}

// for [6, 7, [8, 9]]] depth is 0
