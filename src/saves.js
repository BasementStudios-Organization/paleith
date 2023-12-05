const fs = require('fs')
const path = require('path')

const Crypto = require('./modules/crypto')

const Game = require('../web/javascript/class/game')

class SaveSystem {
    /**
     * @param {Game} game 
     * @param {string} filename
     * @return {string} 
     */
    static Save(game, filename) {
        const pathx = path.join(
            process.env[process.platform === 'win32' ? 'APPDATA' : 'HOME'],
            'TileEngine',
            'Saves',
            `${filename}.tesv`
        )
        fs.writeFileSync(
            pathx,
            Crypto.encrypt(
                Object.fromEntries(
                    new Map()
                        .set("seed", game.seed)
                        .set("playerPos", Object.values(game.player.position))
                        .set("worldDimentions", Object.values(game.tileDataDim))
                        .entries()
                )
            )
        )
        return pathx
    }
    /**
     * @param {string} filename
     * @param {CanvasRenderingContext2D} ctx
     * @return {Game} 
     */
    static Load(filename, ctx) {
        const pathx = path.join(
            process.env[process.platform === 'win32' ? 'APPDATA' : 'HOME'],
            'TileEngine',
            'Saves',
            `${filename}.tesv`
        )
        const fileData = fs.readFileSync(pathx, 'utf8')
        const strData = Crypto.decrypt(fileData)
        const data = JSON.parse(strData)
        const game = new Game(ctx, data.seed)
        game.player.position = data.playerPos
        game.tileDataDim = data.worldDimentions
        return game
    }
}

module.exports = SaveSystem