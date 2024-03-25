import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById(buttonID).addEventListener('click', () => {
  debugger;

  // read user values
const InputString = readString("string");
const skipCount = readNumber("count");


  // create a new string with skipped characters
let skippedString = " " 
for(let i =0; i < InputString.length; i += skipCount);{
skippedString += skippedString[i];
}

  // display the skipped string
  display(skippedString);
});
