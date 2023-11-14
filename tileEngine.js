class Camera {
    constructor(id) {
        this.id = id
        this.x = 0
        this.y = 0
        this.vec = [0, 0]
    }
}

class Tile {
    constructor(name, additionalData) {
        switch (name) {
            case 'grass':
                break;
            case 'air':
                break;
            case 'stone':
                break;
            case 'hayBale':
                break;
            case 'dirt':
                break;
            case 'log':
                break;
            default:
                throw new SyntaxError("Not a valid tile.")
        }
        this.image = new Image()
        this.image.src = `${name}.png`
        this.name = name
        if (additionalData) Object.entries(additionalData).forEach(([k, v]) => { this[k] = v })
    }
    break() {
        console.log('breaking...')
    }
}

class Game {
    /**
     * @param {CanvasRenderingContext2D} context 
     */
    constructor(context) {
        this.tileData = new Array();
        this.context = context;
        this.tileDefaults = { w: 80, h: 80, dx: null, dy: null, dox: null, doy: null };
        /** @type {Map<number, Camera>} */
        this.camera = new Map().set(0, new Camera(0));
        this.mouse = { x: 0, y: 0, cx: 0, cy: 0 };
        this.renderData = { w: 14, h: 10 };
        /** @type {Map<string, Tile>} */
        this.baseTiles = new Map()
            .set('grass', new Tile('grass'))
            .set('stone', new Tile('stone'))
            .set('hayBale', new Tile('hayBale'))
            .set('air', new Tile('air'))
            .set('dirt', new Tile('dirt'))
            .set('log', new Tile('log'))
        this.pressedKeys = new Array()
        this.tileDataDem = { w: 100, h: 100 };
    }
    update() {
        this.camera.get(0).vec[0] = (this.pressedKeys.includes("d") - this.pressedKeys.includes("a")) * 10;
        this.camera.get(0).vec[1] = (this.pressedKeys.includes("s") - this.pressedKeys.includes("w")) * 10;
        //cameraMoveXVel -= cameraMoveXVel/20;
        //cameraMoveYVel -= cameraMoveYVel/20;
        if (Math.abs(this.camera.get(0).vec[0]) < 0.4) this.camera.get(0).vec[0] = 0;
        if (Math.abs(this.camera.get(0).vec[1]) < 0.4) this.camera.get(0).vec[1] = 0;
        this.camera.get(0).x += this.camera.get(0).vec[0];
        this.camera.get(0).y += this.camera.get(0).vec[1];
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, board.width, board.height);
        let cameraBorder = ((x, y, bl, bd, br, bt) => ({ x: ((x < bl) ? bl : (x > br) ? br : x), y: ((y > bd) ? bd : (y < bt) ? bt : y) }))(this.camera.get(0).x, this.camera.get(0).y, 0, 0, (this.tileDataDem.w * this.tileDefaults.w) - board.width, -((this.tileDataDem.h * this.tileDefaults.h) - board.height));
        this.camera.get(0).x = cameraBorder.x;
        this.camera.get(0).y = cameraBorder.y
        // let selectedTile = getTileDataIndex(getMouseCameraPosition(0).x, getMouseCameraPosition(0).y);
        this.drawTiles();
    }
    drawTiles() {
        this.tileDefaults.dox = (Math.round(this.camera.get(0).x / (this.tileDefaults.w)) * (this.tileDefaults.w)) - this.camera.get(0).x - this.tileDefaults.w;// minused by tile width to avoid showing border space
        this.tileDefaults.doy = (Math.round(this.camera.get(0).y / (this.tileDefaults.h)) * (this.tileDefaults.h)) - this.camera.get(0).y + board.height;
        this.tileDefaults.dx = 0;
        this.tileDefaults.dy = 0;
        for (let i = 0; i < this.renderData.h; i++) {
            for (let v = 0; v < this.renderData.w; v++) {
                if (this.tileDefaults.dox + (this.tileDefaults.dx * this.tileDefaults.w) > -this.tileDefaults.w && this.tileDefaults.dox + (this.tileDefaults.dx * this.tileDefaults.w) < 960) {
                    let currentTile = this.tileData[this.tileDefaults.dx + Math.round(this.camera.get(0).x / this.tileDefaults.w) - 1][this.tileDefaults.dy - Math.round(this.camera.get(0).y / this.tileDefaults.h) - 1]; //DEBUG needs to check if has an image key
                    if (currentTile && currentTile.image != this.baseTiles.get('air').image) {
                        this.context.drawImage(currentTile.image, this.tileDefaults.dox + (this.tileDefaults.dx * this.tileDefaults.w), this.tileDefaults.doy + (-this.tileDefaults.dy * this.tileDefaults.h), 80, 80);
                    }
                    //this.context.fillRect(this.tileDefaults.dox + (this.tileDefaults.dx * this.tileDefaults.h), this.tileDefaults.doy + (-this.tileDefaults.dy * this.tileDefaults.h), this.tileDefaults.w, this.tileDefaults.h);
                }
                ++this.tileDefaults.dx;
            }
            this.tileDefaults.dx = 0;
            ++this.tileDefaults.dy;
        }
    }
    getTileDataIndex = (x, y) => ({ x: Math.round((x + 40) / this.tileDefaults.w) - 1, y: -Math.round((y + 60) / this.tileDefaults.h) + 7 });
    getMouseCameraPosition = (id) =>({ x: this.mouse.x + this.camera.get(id).x, y: this.mouse.y + this.camera.get(id).y });
    setTile(_x, _y, _tile) {
        if (_x >= 0 && _x < this.tileDataDem.w && _y >= 0 && _y < this.tileDataDem.h) this.tileData[_x][_y] = _tile;
    }
    generateTree(_xOffset, _yOffset, _thickness, _iterations) {
        this.setTile(_xOffset, _yOffset, this.baseTiles.get('log'))
        let _x = 0;
        let _y = 0;
        for (let i = 0; i < 3; i++) {
            ++_y;
            let expand = Math.round(Math.random() * 2 - 1);
            _x += (_x + _xOffset + expand >= 0 && _x + _xOffset + expand < this.tileDataDem.w) ? expand : 0;
            this.setTile(_x + _xOffset - 1, _y + _yOffset, this.baseTiles.get('log'));
            this.setTile(_x + _xOffset, _y + _yOffset, this.baseTiles.get('log'));
            this.setTile(_x + _xOffset + 1, _y + _yOffset, this.baseTiles.get('log'));
        }
        if (_iterations > 0) {
            this.generateTree(_x + _xOffset, _y + _yOffset, _thickness, _iterations - 1);
        }
    }
    generateCircle(centerX, centerY, radius, tileType) {
        for (let y = -radius; y <= radius; y++) {
            for (let x = -radius; x <= radius; x++) {
                // Check if the current tile is within the circle
                if (x ** 2 + y ** 2 <= radius ** 2) {
                    // Set the tile at the current position to the specified tile type
                    this.setTile(centerX + x, centerY + y, tileType);
                }
            }
        }
    }
}

/**
 * @type {HTMLCanvasElement}
 */
const board = document.getElementById("board")
board.width = 960;
board.height = 540;
const context = board.getContext("2d");
context.imageSmoothingEnabled = false;

const game = new Game(context)

// Add an event listener to the document for the mousemove event
document.addEventListener('mousemove', function (event) {
    game.mouse.x = event.offsetX;
    game.mouse.y = event.offsetY;
});

//tile data, very important
//datacontained in array, block data will be in json format eg). [[{},{}],[{},{}]]
for (let i = 0; i < game.tileDataDem.h; i++) {
    let genCol = [];
    for (let v = 0; v < game.tileDataDem.w; v++) genCol.push(game.baseTiles.get('dirt'));
    game.tileData.push(genCol);
}

for (let _y = 0; _y < game.tileDataDem.h; _y++) {
    for (let _x = 0; _x < game.tileDataDem.w; _x++) {
        if (_y > (Math.sin(_x / 2) * 2) + 5) game.tileData[_x][_y] = game.baseTiles.get('air');
    }
}

for (let _y = 0; _y < game.tileDataDem.h; _y++) {
    for (let _x = 0; _x < game.tileDataDem.w; _x++) {
        if (
            game.tileData[_x][_y + 1] == game.baseTiles.get('air') &&
            game.tileData[_x][_y] != game.baseTiles.get('air')
        ) game.tileData[_x][_y] = game.baseTiles.get('grass');
    }
}

for (let _y = 0; _y < game.tileDataDem.h; _y++) {
    for (let _x = 0; _x < game.tileDataDem.w; _x++) {
        if (
            game.tileData[_x][_y + 1] == game.baseTiles.get('air') &&
            game.tileData[_x][_y] != game.baseTiles.get('air') &&
            Math.random() > 0.8 &&
            game.tileData[_x][_y] != game.baseTiles.get('log')
        ) game.generateTree(_x, _y, 2, 4);
    }
}

game.generateCircle(10, 10, 5, game.baseTiles.get('stone'))

document.addEventListener('keydown', function (event) {
    if (event.key.length === 1 && !game.pressedKeys.includes(event.key)) game.pressedKeys.push(event.key);
});

document.addEventListener('keyup', function (event) {
    game.pressedKeys = game.pressedKeys.filter(key => key !== event.key);
});

setInterval(_ => game.update(), 10)