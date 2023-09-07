// // takes an obj -> it will give me a deepCloned obj

// https://www.geeksforgeeks.org/convert-an-array-to-an-object-in-javascript/
// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/#:~:text=To%20convert%20an%20object%20to%20an%20array%20you%20use%20one,been%20available%20since%20ECMAScript%202017.
const deepClone = (obj) => {
    const type = typeof obj;
    // i don't want to proceed with 
    // 'null', 'undefined' numbers & string
    if (type !== 'object' || !obj) return obj;

    if(Array.isArray(obj)){
        // obj is an array
        return obj.map(item => deepClone(item));
    }

    // this is also array
    let arrObj = Object.entries(obj);

    // this is array
    let deepCloneArrOfObj = arrObj.map(([key, value]) => [key, deepClone(value)]);

    let finalObj = Object.fromEntries(deepCloneArrOfObj);
    return finalObj;
    // returing deepCloned version of obj
}

// step 1
// convert my object into array

// to achieve this -> ???
// iterate over properties of object
// and deep clone property by property


// let arr = [['abc', 12], ['ty', 45], ['qwe', 98]];

// arr.map(([key, value]) => console.log(key, value));

// ele => [key,value]


let obj = [{ p: 10 }, 10, 'abc'];
let obj1 = {
    a: 10,
    r: [{ p: 10 }],
    b: {
        c: 100,
        d: [1, 2, 3, 4],
    }
}

let obj2 = deepClone(obj1);

obj2.b.c=200;

console.log(obj1);
console.log(obj2);

