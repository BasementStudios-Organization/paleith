const { app, BrowserWindow, MessageChannelMain, Menu, MenuItem } = require('electron')
const path = require('path')


/**
 * @param {BrowserWindow} parentWindow 
 */
function generateSeedWindow(parentWindow) {
    const win = new BrowserWindow({
        width: 360,
        height: 120,
        parent: BrowserWindow.getFocusedWindow(),
        modal: true,
        alwaysOnTop: true,
        title: 'Enter A Seed',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            sandbox: false,
            preload: path.join(__dirname, 'server', 'promptpre.js')
        }
    })

    win.loadURL(path.join(__dirname, "modules", "prompt", "index.html"))

    win.webContents.ipc.handle('seed:submit', (event, seed) => {
        if (parentWindow) parentWindow.webContents.send('seed:input', seed)
    })

    return win
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    const sizedWindow = new BrowserWindow({
        transparent: true,
        frame: false
    })

    sizedWindow.loadURL('about:blank')
    sizedWindow.maximize()
    const { width, height } = sizedWindow.getBounds()
    sizedWindow.close()

    const mainWin = new BrowserWindow({
        width, height,
        title: 'Game',
        // autoHideMenuBar: true,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, 'server', 'mainpre.js'),
        }
    })

    const menu = new Menu()

    menu.append(new MenuItem({ label: 'Game Settings', submenu: [
        { label: 'Reseed', click: _ => generateSeedWindow(mainWin) },
        { label: 'Close', click: _ => mainWin.close() },
        { label: 'Dev Tools', click: _ => mainWin.webContents.openDevTools() },
        { label: 'Reset', click: _ => mainWin.webContents.send('web:reset')}
    ] }))

    mainWin.setMenu(menu)

    mainWin.loadFile('web/index.html')

    mainWin.webContents.ipc.handle('web:close', _ => mainWin.close())
    mainWin.webContents.ipc.handle('web:reseed', _ => generateSeedWindow(pWinMgr))

    generateSeedWindow(mainWin)
})