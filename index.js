const { app, BrowserWindow, MessageChannelMain } = require('electron')
const path = require('path')

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
        autoHideMenuBar: true,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, 'server', 'mainpre.js'),
        }
    })

    mainWin.loadFile('web/index.html')

    const promptWindow = new BrowserWindow({
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

    promptWindow.loadURL(path.join(__dirname, "modules", "prompt", "index.html"))

    const mainWinMessager = new MessageChannelMain()
    const pWinMgr = mainWinMessager.port1
    pWinMgr.start()
    const mWinMgr = mainWinMessager.port2
    mWinMgr.start()

    mainWin.webContents.ipc.handle('web:close', _ => mainWin.close())

    promptWindow.webContents.postMessage('port', '*', [pWinMgr])
    mainWin.webContents.postMessage('port', '*', [mWinMgr])
})