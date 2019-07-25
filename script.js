let Array = [];


const redButton = document.querySelector('#red');

//RED
redButton.addEventListener('click', (e) => {
responseBox.style.backgroundColor = "red"
  console.log("You clicked the red button!");
});
// GREEN!!!
const greenButton = document.querySelector('#green');
//v1 let responseBox = document.querySelector('#response-box');

greenButton.addEventListener('click', (event2) => {
  responseBox.style.backgroundColor = "green"
  console.log("You clicked the green button!");
 // v1 Array.push('green')
  // v1 Responsebox.InnerHTML = Array;
});
//BLUE!!!
const blueButton = document.querySelector('#blue');
let responseBox = document.querySelector('#response-box');

blueButton.addEventListener('click', (event3) => {
  responseBox.style.backgroundColor = "blue"
  console.log("You clicked the blue button!");
// v2 responseBox.document.write("blue");
});
// v1 Array.push('blue')
// v1 Responsebox.InnerHTML = Array;
// v2responsebox.document.querySelector("#response-box");
//v2responsebox.textContent += 'blue';
// v2 document.getElementById("#response-box")
