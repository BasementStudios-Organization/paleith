const { ipcRenderer } = require('electron');

ipcRenderer.on(
    'port',
    e => {
        window.port = e.ports[0]
        window.ipc = ipcRenderer
    }
)