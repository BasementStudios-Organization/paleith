const Entity = require(`${__dirname}/entity`)

module.exports = class Cat extends Entity {
    constructor(name, data, game) {
        super(name, data, game)
    }
}