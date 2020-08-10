const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const { create } = require('domain');
const main = require('electron-reload');
const { support } = require('jquery');

app.set('viewengine', 'ejs');

require('electron-reload')(__dirname);

let mainWin, startupWin;

app.on('ready', () => {
    startupWin = new BrowserWindow({
        parent: mainWin,
        modal: false,
        show: true,
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    startupWin.setResizable(false);
    startupWin.setMenu(null);
    startupWin.loadURL(url.format({
        pathname: path.join(__dirname, 'views/start.html'),
        protocol: 'file',
        slashes: true
    }));
    startupWin.center();
});

function createMainWindow() {
    mainWin = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, '/views/index.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWin.hide();
    mainWin.on('closed', () => {
        app.quit();
    });
    mainWin.setMenuBarVisibility(true);
    mainWin.maximize();
}

ipcMain.on('settings-done', (e, settings) => {
    console.log('settings: ', settings);
    createMainWindow();
    mainWin.webContents.send('some', settings);
    startupWin.close();
    mainWin.show();
});