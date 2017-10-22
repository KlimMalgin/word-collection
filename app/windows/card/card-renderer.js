// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')


function clickHideCard() {
  ipcRenderer.send('hideCardWindow');
}

let hideCardBtn = document.querySelectorAll('.hide-card');

if (hideCardBtn.length) {
    hideCardBtn.forEach(item => item.addEventListener('click', clickHideCard));
}


