import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById(buttonID).addEventListener('click', () => {
  debugger;

  // read user text
const userInput = readStrig('text');

  // create the pyramid
const pyramidHeight = 7;
let pyramid = '';
  for (i = 1; i <= pyramidHeight; i++) {
    for (let j = 1; j <= pyramidHeight - i; j++) {
      pyramid += ' ';
  }

?
?
?
?
?





  // display the pyramid
  display(originalString);
});
