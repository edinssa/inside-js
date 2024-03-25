import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById(buttonID).addEventListener('click', () => {
  debugger;

  // read user values
let text = readString('#textInput');
let repeatCount = readNumber('#repeatInput');

  // repeat the characters in the text
let repeatedText = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < repeatCount; j++) {
    repeatedText += text[i];
    }
  }

  // display the text with repeated characters
  display('#result', repeatedText)
});
