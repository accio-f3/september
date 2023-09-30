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

// Throttle Fn -> it's a technique to limit the execution of an event
// when this event triggers continuesly due to user's actions

// 1st method
// const throttleFn = (callBackFn, cooldownTime) => {
//     let lastExeFnTime = 0; //at t = 0 a function has been executed
//     return function(...args){
//         let currentTime = new Date().getTime(); // gives time in milli seconds
//         if (currentTime - lastExeFnTime < cooldownTime) {
//             // don't do anything
//             return;
//         }
//         else{
//             callBackFn(...args);
//             lastExeFnTime=currentTime;
//         }
//     }
// }

// 2nd method
const throttleFn2 = (callBackFn, coolDownTime) => {
  let execute = true; // not inside coolDownTime
  return function (...args) {
    if (execute) {
      callBackFn(...args);
      execute = false; // now we are inside coolDownTime
      setTimeout(() => {
        execute = true;
      }, coolDownTime);
    }
  };
};

const updatedShotGunFn = throttleFn2(shotGunFireHandle,200);

trigger.addEventListener('click',()=>{
    machineCount++;
    normalCountDisplay.innerText=machineCount;
    updatedShotGunFn();
})


