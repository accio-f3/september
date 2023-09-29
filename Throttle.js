// shotgun -> s12k
// machine gun -> m416, akm

let machineCount = 0;
let shotgunCount = 0;

let normalCountDisplay = document.getElementById('normal-count');
let throttleCountDisplay = document.getElementById('throttle-count');

const trigger = document.getElementById('trigger');

function shotGunFireHandle(){
    shotgunCount++;
    throttleCountDisplay.innerText=shotgunCount;
}

// 1. modify fn
// 2. make a generic function that modify any function
// aaloo -> sona

const throttleFn = (callBackFn, cooldownTime) => {
    let lastExeFnTime = 0; //at t = 0 a function has been executed
    return function(...args){
        console.log(lastExeFnTime);
        let currentTime = new Date().getTime(); // gives time in milli seconds
        if (currentTime - lastExeFnTime < cooldownTime) {
            // don't do anything
            return;
        }
        else{
            callBackFn(...args);
            lastExeFnTime=currentTime;
        }
    }
}

const updatedShotGunFn = throttleFn(shotGunFireHandle,200);

trigger.addEventListener('click',()=>{
    machineCount++;
    normalCountDisplay.innerText=machineCount;
    updatedShotGunFn();
})
