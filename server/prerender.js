const { contextBridge, ipcRenderer } = require('electron');

ipcRenderer.on(
    'mssgr',
    /**
     * @param {import('electron').IpcMessageEvent} event 
     * @param {import('electron').MessagePortMain} mssgr 
     */
    (event, mssgr) => {
        contextBridge.exposeInMainWorld('mssgr', mssgr)
        mssgr.on(event, listener)
    }
)

contextBridge.exposeInMainWorld('electron', {
    ipc: ipcRenderer,
    onSeed: (callback) => ipcRenderer.on('game:seed', callback)
})

