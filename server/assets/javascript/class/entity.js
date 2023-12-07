const Tile = require(`${__dirname}/tile`)

module.exports = class Entity extends Tile {
    constructor(name, data, game) {
        super(name, data, game);
        this.id = data.id || 0;
        this.position = Object.assign({ x: 0, y: 0 }, data.position ?? {});
        this.velocity = Object.assign({ x: 0, y: 0 }, data.velocity ?? {})
        this.hitBox = Object.assign({ bl: 0, bb: 0, br: 84, bt: 44, bW: 22, bH: 56 }, data.hitBox ?? {})
        this.dim = Object.assign({ w: 22, h: 28 }, data.dim ?? {});
        //this.dim = Object.assign({ w: 22, h: 28 }, data.dim ?? {});
        //this.dim = data.dim || { w: 22, h: 28 }; // default dimensions
        this.physicsPresets = Object.assign({ gravity: 0.5, friction: 0.25, jumpHeight: 20 }, data.physicsPresets ?? {});
    }
    entityPhysics(options = {}) {
        const selectedOptions = Object.assign({}, { speed: 2, fly: false }, options)
        if (selectedOptions.fly) this.position = Object.assign(
                this.position,
                {
                    x: this.position.x + (this.game.pressedKeys.includes("d") - this.game.pressedKeys.includes("a")) * selectedOptions.speed,
                    y: this.position.y + (this.game.pressedKeys.includes("w") - this.game.pressedKeys.includes("s")) * selectedOptions.speed
                }
            );
        else {
            this.velocity.y -= this.physicsPresets.gravity;
            // y coll
            this.position.y += this.velocity.y;
            //! change this to platform below based on hitBox
            if (this.game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                while (this.game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                    this.position.y -= this.velocity.y;
                }
                this.velocity.y = 0;
            }
            //x coll
            this.velocity.x -= this.velocity.x * this.physicsPresets.friction;
            this.position.x += this.velocity.x;
            if (this.game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                while (this.game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                    this.position.x -= this.velocity.x;
                }
                this.velocity.x = 0;
            }
        }
        return this
    }
}