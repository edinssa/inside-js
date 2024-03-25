import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById(buttonID).addEventListener('click', () => {
  debugger;

  // read user text
const text = readString('#text')

  // use a for loop that counts down (i--) to reverse the input
let reversedString = '';
for(i = text.length-1; i >=0; i--) {
reversedString += text[i];
}

  // display the reversed string
  display('#result', reversedString)
});
