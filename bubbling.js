const grandParent = document.getElementById('grandParent');
const parentDiv = document.getElementById('parent');
const child = document.getElementById('child');
const childKaChild = document.getElementById('childKaChild');

// true or false
// true -> event should trickle down
// false -> event should bubble up
// false is default behavior

grandParent.addEventListener("click", () => {
  console.log("gp has been clicked");
},false); 

parentDiv.addEventListener('click',()=>{
    console.log('parent has been clicked');
},true); 

child.addEventListener('click',(event)=>{
    // event.stopPropagation();
    console.log('child has been click');
},false); 

childKaChild.addEventListener('click',()=>{
    console.log('childKaChild has been clicked');
})

// event going down and going up
// and this happens irrespective of true 
// and false