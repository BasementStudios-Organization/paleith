const Entity = require(`${process.cwd()}/server/assets/javascript/class/entity`)

module.exports = class Player extends Entity {
    constructor(name, data, game) {
        super(name, data, game)
    }
    entityPlatformerInput() {
        this.velocity.x += (this.game.pressedKeys.includes("d") - this.game.pressedKeys.includes("a")) * 5;
        const { bl, bb, br, bt } = this.hitBox
        if (this.game.hitBoxCollision(this.position.x, this.position.y - 1, bl, bb, br, bt)) {
            this.velocity.y = this.game.pressedKeys.includes("w") * this.physicsPresets.jumpHeight;
        }
        return this
    }
    moveCamera() {
        //! offset 600, 480 may not be exactly center
        this.game.camera.get(0).x += ((this.position.x - 600 / this.game.camera.get(0).size + this.hitBox.bW * 2) - this.game.camera.get(0).x) / 5;
        this.game.camera.get(0).y += ((-this.position.y - 480 / this.game.camera.get(0).size + this.hitBox.bH * 2) - this.game.camera.get(0).y) / 10;

        //this.game.camera.get(0).x = this.position.x;
        //this.game.camera.get(0).y = -this.position.y;

        return this
    }
}