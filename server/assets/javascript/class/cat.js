const Entity = require(`${process.cwd()}/server/assets/javascript/class/entity`)

module.exports = class Cat extends Entity {
    constructor(name, data, game) {
        super(name, data, game)
    }
}