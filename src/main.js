const {
    app,
    BrowserWindow,
    ipcMain,
    protocol
} = require('electron');
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);
require('ejs-electron');

let mainWin, startupWin;

app.on('ready', () => {
    createStaticFilesProtocol();
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
    // startupWin.setMenu(null);
    startupWin.loadURL(url.format({
        pathname: path.join(__dirname, 'views/start.ejs'),
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
        pathname: path.join(__dirname, '/views/index.ejs'),
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

function createStaticFilesProtocol() {
    protocol.registerFileProtocol('static', (request, callback) => {
        console.log('url full: ', request.url);
        const url = request.url.substr(7);
        console.log('url req: ', url);
        // in this case the path is through the __dirname
        const urlpath = {
            path: path.normalize(`${__dirname}/${url}`)
        };
        console.log('url path: ', urlpath);
        callback(urlpath);
    }, (error) => {
        if (error) console.error('Falló al registrar protocolo');
    });
}