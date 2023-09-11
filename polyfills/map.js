// let arr = [1,2,3];

// // making my browser old
// // delete Array.prototype.map;

// // it creates a new array
// // 

// // Array.prototype.test = function(){
// //     console.log(this);
// // }

// // arr.test


// Array.prototype.map = function (callback) {
//     let newArr=[];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callback(this[i], i));
//     }
//     return newArr;
// }


// // // // item -> arr[index]
// function callback(item) {
//     console.log('item --> ', item, 'index-->');
//     return false;
// }

// let newArr = arr.map(callback);

// console.log(newArr);


// oldArr = [ele1,ele2,ele3] -> map -> newArr;
// newArr = [callback(ele1),callback(ele2),callback(ele2)];


delete Array.prototype.map;

Array.prototype.map = function (callback) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        // i need to take ele1 (older array)
        // and give it to new Array (updated value)
        // callback(ele)
        newArr.push(callback(this[i], i));
    }

    return newArr;
}

let arr2=[1,2,3];

function callback(element, index) {
    return element+2;
}

let newArr = arr2.map(callback);
console.log(arr2);
console.log(newArr);

// map method expects a call back function
// from user

// map -> oldArr -> newArr
// oldArr = [ele1,ele2,ele3];
// newArr = [callback(ele1),callback(ele2),callback(ele3)]

// ele1 -> callback(ele1)
// ele2 -> callback(ele2)
// ele3 -> callback(ele3)



// map -> ele -> callback(ele) -> newArr