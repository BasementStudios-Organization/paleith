const { ipcRenderer, IpcRendererEvent } = require('electron');

globalThis.ipc = ipcRenderer
globalThis.close = () => ipcRenderer.invoke('web:close');
globalThis.reseed = () => ipcRenderer.invoke('web:reseed');
/** @param {(event:IpcRendererEvent, ...args) => void} callback */
globalThis.onSeed = (callback) => {ipcRenderer.on('seed:input', callback)}

