module.exports = class Tile {
    constructor(name, additionalData, game) {
        this.game = game
        this.image = new Image()
        this.image.src = `./assets/images/${name}.png`
        this.name = name
        //! add an array of non solid preset blocks to check here
        this.solid = ['woodPlatform', 'air', 'log', 'leaves'].includes(name) ? false : true;
        this.platform = (name === 'woodPlatform') // No need for a turnary as this is a boolean logic check
        if (additionalData) Object.entries(additionalData).forEach(([k, v]) => { this[k] = v })
    }
    breakBlock() {
        console.log('breaking...')
    }
}