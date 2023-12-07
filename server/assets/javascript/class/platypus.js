const Entity = require(`${__dirname}/entity`)

module.exports = class Platypus extends Entity {
    constructor(name, data, game) {
        super(name, data, game)
        //this.hitBox = Object.assign({ bl: 6, bb: 0, br: 12, bt: 6, bW: 6, bH: 6 }, data.hitBox ?? {})
        this.dim = Object.assign({ w: 19, h: 11 }, data.dim ?? {});
    }
}