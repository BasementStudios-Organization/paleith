const Entity = require('./entity')

module.exports = class Platypus extends Entity {
    constructor(name, data, game) {
        super(name, data, game)
        this.dim = Object.assign({ w: 220, h: 280 }, data.dim ?? {});
    }
    

}