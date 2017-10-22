// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')

function clickShowCard() {
  ipcRenderer.send('showCardWindow');
}

function clickParseText() {
    let inputField = document.querySelector('.input-field');
    let val = inputField.value;

    if (val && val.length) {
        val.split(' ');
    }

    debugger;
}

let showCardBtn = document.querySelector('.show-card');
let parseBtn = document.querySelector('.parse-btn');

if (showCardBtn) {
    showCardBtn.addEventListener('click', clickShowCard)
}

if (parseBtn) {
    parseBtn.addEventListener('click', clickParseText)
}
