module.exports = class Camera {
    constructor(id, _x = 0, _y = 0) {
        this.id = id
        this.x = _x
        this.y = _y
        this.size = 1;
        this.w = 960;
        this.h = 540;
        this.vec = [0, 0]
    }
}