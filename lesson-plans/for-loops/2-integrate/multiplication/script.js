import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById(buttonID).addEventListener('click', () => {
  debugger;

  // read user values
const num1 = readNumber('#num1');
const num2 = readNumber('#num2');
  // use a for loop to multiply the two numbers
let product = 0;
for(let i = 0; i < num2; i++){
  product += num1;
}
  // display the product
  display('#result', product)
});
