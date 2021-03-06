const electron = require('electron')

const path = require('path')
const url = require('url')

const { app, ipcMain, BrowserWindow } = require('electron')

const Window = require('./app/common/window');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  mainWindow = new Window({
    width: 800,
    height: 600,
    maximizable: false,
    resizable: false,
    _page: path.join(__dirname, 'index.html'),
    _dev: true
  })

  cardWindow = new Window({
    //parent: mainWindow,
    show: false,
    width: 430,
    height: 250,
    minimizable: false,
    maximizable: false,
    resizable: false,
    frame: false,
    _page: path.join(__dirname, 'app/windows/card/card.html'),
    //_dev: true
  })

  mainWindow.listen('showCardWindow', () => cardWindow.instance.show());
  mainWindow.listen('hideCardWindow', () => cardWindow.instance.hide());

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
