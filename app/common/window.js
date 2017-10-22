
const { ipcMain, BrowserWindow } = require('electron');
const url = require('url');


class Window {

    /**
     * Набор опций для BrowserWindow
     *
     * Дополнительные опции для управления расширениями окна:
     * _page
     * _dev
     */
    constructor (options) {
        this.window = new BrowserWindow(options);
            /*{
            width: 800,
            height: 600,
            maximizable: false,
            resizable: false,
            }*/

            // and load the index.html of the app.
            this.window.loadURL(url.format({
                pathname: options._page,   // 'index.html'
                protocol: 'file:',
                slashes: true
            }))

            // Open the DevTools.
            options._dev && this.window.webContents.openDevTools()

            // Emitted when the window is closed.
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            this.window.on('closed', () => this.window = null)
    }

    get instance() {
        return this.window;
    }

    listen (eventName, callback) {
        ipcMain.on(eventName, callback);
    }

};

module.exports = Window;
