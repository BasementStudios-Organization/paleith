const path = require('path')
const fs = require('fs-extra')

class SaveSystem {
    static gameDir = path.resolve(process.env[process.platform === 'win32' ? 'APPDATA' : 'HOME'], 'Paleith')
    static getBaseDirFilepath = (file) => path.resolve(SaveSystem.gameDir, file)
    static gameSaveDir = path.resolve(SaveSystem.gameDir, 'saves')
    static getSaveFilepath = (file) => path.resolve(SaveSystem.gameSaveDir, file)
    static gameConfigDir = path.resolve(SaveSystem.gameDir, 'config')
    static getConfigFilepath = (file) => path.resolve(SaveSystem.gameConfigDir, file)
    static gameTempDir = path.resolve(SaveSystem.gameDir, 'temp')
    static getTempFilepath = (file) => path.resolve(SaveSystem.gameTempDir, file)
    static saveFileToTemp(file, data) {
        fs.ensureDir(SaveSystem.gameTempDir)
        fs.writeFileSync(SaveSystem.getTempFilepath(file), data)
    }
    static deleteCallback = (pathx) => ((..._) => fs.unlinkSync(path.resolve(pathx)))
}

module.exports = SaveSystem