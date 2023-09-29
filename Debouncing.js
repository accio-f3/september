// if we are keeping our auto sugegst feature
// 'apple' -> 5 API calls will be done

// a solution somewhere between both

// if we are removing our auto suggest feature
// 0


// debouncing -> it limits the execution  of a function call
// and it waits for a certain amount of time before running that function


const input1 = document.getElementById('input-1');

function searchFn(event){
    console.log(event.target.value);
}


const debounceFn = (callBackFn,delayTime) => {
    let timerId; // we declared timerId here because of closure
    return function (...args) {
        // 
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            callBackFn(...args);
        },delayTime);
    };
};

const optimisedFn1 = debounceFn(searchFn,200);



// 1st -> make searchFn optimised
// 2nd -> make a fn that can make any fn optimised

// fn1 -> debounceFn -> optimisedFn1
