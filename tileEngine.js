class Camera {
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

class Tile {
    constructor(name, additionalData) {
        //? Disabled as it interferes with new block additions
        // switch (name) {
        //     case 'grass':
        //         break;
        //     case 'air':
        //         break;
        //     case 'stone':
        //         break;
        //     case 'hayBale':
        //         break;
        //     case 'dirt':
        //         break;
        //     case 'log':
        //         break;
        //     case 'leaves':
        //         break;
        //     default:
        //         throw new SyntaxError("Not a valid tile.")
        // }
        this.image = new Image()
        this.image.src = `${name}.png`
        this.name = name
        if (additionalData) Object.entries(additionalData).forEach(([k, v]) => { this[k] = v })
    }
    breakBlock() {
        console.log('breaking...')
    }
}

class Block extends Tile {
    constructor(name, data) {
        super(name, data)
    }
}

class Entity extends Tile {
    constructor(name, data) {
        super(name, data)
    }
}

class Game {
    /**
     * @param {CanvasRenderingContext2D} context 
     */
    constructor(context) {
        this.tileData = new Array();
        this.context = context;
        this.tileDefaults = {
            /** Width */         w: 80,
            /** Height */        h: 80,
            /** DrawOffsetX */   dox: null,
            /** DrawOffsetY */   doy: null
        };
        /** @type {Map<number, Camera>} */
        this.camera = new Map().set(0, new Camera(0, 0, -1600));
        this.mouse = { x: 0, y: 0, cx: 0, cy: 0 };
        this.renderData = { w: 12, h: 16 };
        /*
        3X4
        */
        /** @type {Map<string, Tile>} */
        this.baseTiles = new Map()
            .set('grass', new Tile('grass'))
            .set('stone', new Tile('stone'))
            .set('hayBale', new Tile('hayBale'))
            .set('air', new Tile('air'))
            .set('dirt', new Tile('dirt'))
            .set('log', new Tile('log'))
            .set('leaves', new Tile('leaves'))

        this.pressedKeys = new Array()
        this.tileDataDim = { w: 1000, h: 1000 };
        //controls the presets for level generation
        /**tileGenPresets*/
        this.tileGenPresets = {
            /** Water Level */
            waterLvl: 20,
            hillLength: 0.25,
            hillExtreme: 4
        };
        
    }
    
    update() {
        this.camera.get(0).vec[0] = (this.pressedKeys.includes("d") - this.pressedKeys.includes("a")) * 16;
        this.camera.get(0).vec[1] = (this.pressedKeys.includes("s") - this.pressedKeys.includes("w")) * 16;
        //cameraMoveXVel -= cameraMoveXVel/20;
        //cameraMoveYVel -= cameraMoveYVel/20;
        if (Math.abs(this.camera.get(0).vec[0]) < 0.4) this.camera.get(0).vec[0] = 0;
        if (Math.abs(this.camera.get(0).vec[1]) < 0.4) this.camera.get(0).vec[1] = 0;
        this.camera.get(0).x += this.camera.get(0).vec[0];
        this.camera.get(0).y += this.camera.get(0).vec[1];

        this.context.fillStyle = "lightblue";
        this.context.fillRect(0, 0, board.width, board.height);

        //!let cameraBorder = ((x, y, bl, bd, br, bt) => ({ x: ((x < bl) ? bl : (x > br) ? br : x), y: ((y > bd) ? bd : (y < bt) ? bt : y) }))(this.camera.get(0).x, this.camera.get(0).y, 0, 0, (this.tileDataDim.w ** 2) - board.width, -((this.tileDataDim.h ** 2) - board.height));
        //!this.camera.get(0).x = cameraBorder.x;
        //!this.camera.get(0).y = cameraBorder.y;
        // this.camera.get(0).x =
        //     //? first turnatry checks if x is less than 0
        //     (this.camera.x < 0) ?
        //         //? if it is, it then sets it to 0
        //         0 :
        //             //? otherwise, it uses an additional turnary in which it checks if the x pos is less than the tileDataDem width squared (delemiated as '** 2')
        //             //? minus the width
        //             (this.camera.get(0).x > (this.tileDataDim.w ** 2) - this.camera.get(0).w) ?
        //                 //? again, if true:
        //                 (this.tileDataDim.w * this.tileDefaults.w) - this.camera.get(0).w :
        //                     //? otherwise, keep the inital value:
        //                     this.camera.get(0).x;

        // this.camera.get(0).y =
        //     //? first turnatry checks if y is greater than 0
        //     (this.camera.get(0).y > 0) ?
        //         //? if it is, it then sets it to 0
        //         0 :
        //             //? otherwise, it uses an additional turnary in which it checks if the y pos is less than the tileDataDem highth squared (delemiated as '** 2')
        //             //? minus the height
        //             ((this.camera.get(0).y < (this.tileDataDim.h ** 2) - this.camera.get(0).h)) ?
        //                 //? again, if true:
        //                 (this.tileDataDim.h * this.tileDefaults.h) - this.camera.get(0).h :
        //                     //? otherwise, keep the inital value:
        //                     this.camera.get(0).y;

        //? Using the turnaries above does the same thing as all of these "if statements"
        //? Just as a reminder, turnaries look like the following:
        /*
        * (statementToCheck) ? ifTrue : ifFalse
        * Where both the 'ifTrue' section as well as the 'ifFalse` section can be functions or additional turnaries
        */
        //? These turnaries are used to then assign the camera x & y positions

        if (this.camera.get(0).x < 0) this.camera.get(0).x = 0;
        if (this.camera.get(0).x > (this.tileDataDim.w * this.tileDefaults.w) - this.camera.get(0).w) this.camera.get(0).x = (this.tileDataDim.w * this.tileDefaults.w) - this.camera.get(0).w;
        if (this.camera.get(0).y > 0) this.camera.get(0).y = 0;
        if (this.camera.get(0).y < -(this.tileDataDim.h * this.tileDefaults.h) + this.camera.get(0).h) this.camera.get(0).y = -(this.tileDataDim.h * this.tileDefaults.h) + this.camera.get(0).h;
        // let selectedTile = getTileDataIndex(getMouseCameraPosition(0).x, getMouseCameraPosition(0).y);
        this.drawTiles();
        this.drawGUI();
    }
    drawTiles() {
        this.camSize = this.camera.get(0).size;
        this.tileDefaults.dox = (Math.round(this.camera.get(0).x / (this.tileDefaults.w)) * (this.tileDefaults.w)) - this.camera.get(0).x - this.tileDefaults.w;// minused by tile width to avoid showing border space
        this.tileDefaults.doy = (Math.round(this.camera.get(0).y / (this.tileDefaults.h)) * (this.tileDefaults.h)) - this.camera.get(0).y + board.height;
        
        for (let dy = 0; dy < (this.renderData.h / (this.tileDefaults.h / 80)) + 2; dy++) {
            for (let dx = 0; dx < (this.renderData.w / (this.tileDefaults.w / 80)) + 2; dx++) {
                if (this.tileDefaults.dox + (dx * this.tileDefaults.w) > -this.tileDefaults.w && this.tileDefaults.dox + (dx * this.tileDefaults.w) < 960) {
                    let currentTile = this.tileData[dx + Math.round(this.camera.get(0).x / this.tileDefaults.w) - 1][dy - Math.round(this.camera.get(0).y / this.tileDefaults.h) - 1]; //DEBUG needs to check if has an image key
                    if (currentTile && currentTile != this.baseTiles.get('air')) {
                        this.context.drawImage(currentTile.image, this.tileDefaults.dox + (dx * this.tileDefaults.w), this.tileDefaults.doy + (-dy * this.tileDefaults.h), this.tileDefaults.w, this.tileDefaults.h);
                    }
                }
            }
        }
    }

    drawGUI() {
        const {round: r} = Math
        this.context.fillStyle = "white";
        this.context.font = 'bold 24px "Comic Sans MS", "Comic Sans", cursive'
        this.context.fillText(`${r(this.camera.get(0).x / this.tileDefaults.w)}, ${r(Math.abs(this.camera.get(0).y / this.tileDefaults.h))}`, 30, 50);
    }

    getTileDataIndex = (x, y) => ({ x: Math.round((x + 40) / this.tileDefaults.w) - 1, y: -Math.round((y + 60) / this.tileDefaults.h) + 7 });

    getMouseCameraPosition = (id) => ({ x: this.mouse.x + this.camera.get(id).x, y: this.mouse.y + this.camera.get(id).y });
    
    setTile(_x, _y, _tile, _overwrite = true) {
        if (_x >= 0 && _x < this.tileDataDim.w && _y >= 0 && _y < this.tileDataDim.h && (_overwrite == true || this.tileData[_x][_y] == this.baseTiles.get('air'))) {
            this.tileData[_x][_y] = _tile;
        }
    }
    generateTree(_xOffset, _yOffset, _thickness, _iterations) {
        this.setTile(_xOffset, _yOffset, this.baseTiles.get('log'))
        let _x = 0;
        let _y = 0;
        for (let i = 0; i < 3; i++) {
            ++_y;
            let expand = Math.round(Math.random() * 3 - 2);
            _x += (_x + _xOffset + expand >= 0 && _x + _xOffset + expand < this.tileDataDim.w) ? expand : 0;
            for (let h = -1; h < 3; h++) {
                this.setTile(_x + _xOffset - 1, _y + _yOffset + h, this.baseTiles.get('log'));
                this.setTile(_x + _xOffset, _y + _yOffset + h, this.baseTiles.get('log'));
                this.setTile(_x + _xOffset + 1, _y + _yOffset + h, this.baseTiles.get('log'));
            }
            
        }
        if (_iterations > 0) this.generateTree(_x + _xOffset, _y + _yOffset, _thickness, _iterations - 1);
        else {
            for (let i = 0; i < 2; i++) {
                
                this.generateCircle(_x + _xOffset + Math.round(Math.random()*10)-5, _y + _yOffset, 5, this.baseTiles.get('leaves'));
            }
        }
    }

    


    //circle function by github copilot
    generateCircle(centerX, centerY, radius, tileType) {
        for (let y = -radius; y <= radius; y++) {
            for (let x = -radius; x <= radius; x++) {
                // Check if the point is within the circle's radius
                if (x * x + y * y <= radius * radius) {
                    game.setTile(centerX + x, centerY + y, tileType);
                }
            }
        }
    }

    //generate square
    generateSquare(_l, _b, _r, _t, _tileType, _hollow = false, _makeHollow = false, _replace = true) {
        let _width = Math.abs(_r) + Math.abs(_l);
        let _height = Math.abs(_t) + Math.abs(_b);
        for (let y = _b; y < _height ; y++) {
            for (let x = _l; x < _width; x++) {
                if (_replace && _makeHollow && x != _l && x != _r && y != _b && y != _t) {
                    this.setTile(x, y, this.baseTiles.get('air'));
                }
                if ((!_hollow || x == _l || x == _r || y == _b || y == _t) && (_replace || this.tileData[x][y] == this.baseTiles.get('air'))) {
                    this.setTile(x, y, _tileType);
                }
            }
        }
    }

    generateHouse(_x, _y, _w, _h, _tileType) {
        for (let i = 0; i < 3; i++) {
            game.generateSquare(_x, _y, _y + _h, _x + _w, _tileType, true, true, false);
            _x += Math.round(Math.random()*10)-5;
            _y += Math.round(Math.random()*10)-5;
        }
        //game.generateSquare(1, 1, 10, 10, _tileType, true, true, false);
    }
}



/**
 * @type {HTMLCanvasElement}
 */
const board = document.getElementById("board");
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
//makes chunk of dirt
for (let i = 0; i < game.tileDataDim.w; i++) {
    // let genCol = [];
    // for (let v = 0; v < game.tileDataDim.w; v++) {
    //     genCol.push(game.baseTiles.get('dirt'))
    // };
    game.tileData.push(new Array(game.tileDataDim.h).fill(game.baseTiles.get('dirt')));
}

//generates the hills
for (let _y = 0; _y < game.tileDataDim.h; _y++) {
    for (let _x = 0; _x < game.tileDataDim.w; _x++) {
        if (_y > (Math.sin(_x * game.tileGenPresets.hillLength) * game.tileGenPresets.hillExtreme) + game.tileGenPresets.waterLvl) {
            game.setTile(_x, _y, game.baseTiles.get('air'));
        }
    }
}



//generates grass on top
for (let _y = 0; _y < game.tileDataDim.h; _y++) {
    for (let _x = 0; _x < game.tileDataDim.w; _x++) {
        if (
            game.tileData[_x][_y + 1] == game.baseTiles.get('air') &&
            game.tileData[_x][_y] != game.baseTiles.get('air')
        ) game.tileData[_x][_y] = game.baseTiles.get('grass');
    }
}

// generates trees
for (let _y = 0; _y < game.tileDataDim.h; _y++) {
    for (let _x = 0; _x < game.tileDataDim.w; _x++) {
        if (
            game.tileData[_x][_y + 1] == game.baseTiles.get('air') &&
            game.tileData[_x][_y] != game.baseTiles.get('air') &&
            Math.random() > 0.8 &&
            game.tileData[_x][_y] != game.baseTiles.get('log') &&
            game.tileData[_x][_y] != game.baseTiles.get('leaves')
        ) game.generateTree(_x, _y, 2, 30);
    }
}

//generate stone in ground
for (let i = 0; i < 10; i++) {
    game.generateCircle(Math.round(Math.random()*game.tileDataDim.w), Math.round(Math.random()*game.tileGenPresets.waterLvl), 4, game.baseTiles.get('stone'), true)
}

//generates house
//game.generateHouse(20, 20, 5, 5, game.baseTiles.get('hayBale'))

document.addEventListener('keydown', function (event) {
    if (event.key.length === 1 && !game.pressedKeys.includes(event.key)) game.pressedKeys.push(event.key);
});

document.addEventListener('keyup', function (event) {
    game.pressedKeys = game.pressedKeys.filter(key => key !== event.key);
});

setInterval(_ => game.update(), 100/6)