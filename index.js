const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')

const PORT = 3000
const startTime = Date.now()

/**
 * @param {BrowserWindow} parentWindow 
 */
function generateSeedWindow(parentWindow) {
    const win = new BrowserWindow({
        width: 360,
        height: 120,
        modal: true,
        alwaysOnTop: true,
        title: 'Enter A Seed',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            sandbox: false,
            preload: path.resolve(__dirname, 'render', 'promptpre.js')
        }
    })

    win.loadURL(`http://localhost:${PORT}/prompt`)

    win.webContents.ipc.handle('seed:submit', (event, seed) => {
        if (parentWindow) parentWindow.webContents.send('seed:input', seed)
    })

    return win
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    const appReadyTime = Date.now()
    console.log(`App ready in ${appReadyTime - startTime}ms`)
    const server = require('express')();
    server
        .set('view engine', 'pug')
        .use(require('./server/routes/router'));
    server.listen(3000, () => {
        const serverReadyTime = Date.now()
        console.log(`Server ready in ${serverReadyTime - appReadyTime}ms`)
        console.log(`Total time: ${serverReadyTime - startTime}ms`)
        console.log(`Listening on port ${PORT}`)
        const mainWin = new BrowserWindow({
            // autoHideMenuBar: true,
            darkTheme: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                sandbox: false,
                devTools: true,
                preload: path.resolve(__dirname, 'render', 'mainpre.js'),
            }
        })

        const menu = new Menu()

        const GameSettingsMenu = new MenuItem({
            label: 'Game Settings', submenu: [
                { label: 'Reseed', click: _ => generateSeedWindow(mainWin) },
                { label: 'Close', click: _ => mainWin.close() },
                { label: 'Dev Tools', click: _ => mainWin.webContents.openDevTools() },
                { label: 'Reset', click: _ => mainWin.webContents.send('web:reset') },
                { label: 'Restart', click: _ => mainWin.webContents.reload() },
            ]
        })

        menu.append(GameSettingsMenu)

        mainWin.setMenu(menu)

        mainWin.loadURL(`http://localhost:${PORT}/`)
        mainWin.maximize()
        mainWin.webContents.ipc.handle('web:close', _ => mainWin.close())
        mainWin.webContents.ipc.handle('web:reseed', _ => generateSeedWindow(mainWin))

        generateSeedWindow(mainWin)
    });
})