// oldArr -> newArry

// oldArray = [ele1,ele2,ele3];

// map ->
// newArray = [callback(ele1),callback(ele2),callback(ele3)]

// filter->
// if callback(ele1) is true or not
// true -> [ele1]
// else -> []

// let arr = [1, 2, 3, 4];

// my browser is not compatible for filter method
// delete Array.prototype.filter;

// Array.prototype.filter = function(callback){
//     let newArray=[];

//     for (let i = 0; i < this.length; i++) {
//         // if my callback is giving true for this[i]
//         if (callback(this[i], i)) {
//             newArray.push(this[i]);
//         }
//     }

//     return newArray;
// }

// this -> ✅
// prototype -> ✅
// you know how actually things work behind the scene -> ✅


// function callback(ele,index){
//     return ele > 5;
// }
// // [false,false,false,false]
// // [1,2,3,4]

// let newArray = arr.filter(callback);

// console.log(newArray);

// filter cannot change values of array
// it can only decide the fate of element
// if it will go inside updated array or not
// based on return of callback function

let arr = [true,true,true,true];

let newArray = arr.filter((ele) => ele);
// ele -> !ele

console.log(newArray);


const callback = () => {
    // performing some logic
    return 'something'
}

// whenever you are using {}
// you will have to use return keyword


// when you want to avoid return keyword
// you will have to remove {}
const callback2 = () => 'something';

