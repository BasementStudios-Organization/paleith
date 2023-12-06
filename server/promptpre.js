const { ipcRenderer } = require('electron');

ipcRenderer.on(
    'port',
    e => {
        globalThis.port = e.ports[0]
        globalThis.ipc = ipcRenderer
    }
)