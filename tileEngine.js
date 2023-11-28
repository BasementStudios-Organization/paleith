/// <reference types="./ranjs.d.ts">

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
        this.image = new Image()
        this.image.src = `${name}.png`
        this.name = name
        //! add an array of non solid preset blocks to check here
        this.solid = name == 'woodPlatform' || name == 'air' || name == 'log' || name == 'leaves' ? false : true;
        this.platform = name == 'woodPlatform' ? true : false;
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
        super(name, data);
        this.id = data.id || 0;
        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || { x: 0, y: 0 };
        this.hitBox = data.hitBox || { bl: 6, bb: 28, br: 14, bt: 0, bW: 14, bH: 28};
        this.dim = data.dim || { w: 22, h: 28 };
        this.physicsPresets = data.physicsPresets || 
        {
            gravity: 0.5,
            friction: 0.5,
            jumpHeight: 20
        };
    }
    
    entityPhysics(_fly = false, _speed = 1) {
        
        
        if (_fly == true) {
            this.position.x += (game.pressedKeys.includes("d") - game.pressedKeys.includes("a")) * _speed;
            this.position.y += (game.pressedKeys.includes("w") - game.pressedKeys.includes("s")) * _speed;
        } else {
            this.velocity.y -= this.physicsPresets.gravity;
            // y coll
            this.position.y += this.velocity.y;
            //! change this to platform below based on hitBox
            
            
            if (game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                
                while (game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                    this.position.y -= this.velocity.y;
                }
                this.velocity.y = 0;
            }

            
    
            //x coll
            this.velocity.x -= this.velocity.x * this.physicsPresets.friction;
            this.position.x += this.velocity.x;
            if (game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                while (game.hitBoxCollision(this.position.x, this.position.y, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
                    this.position.x -= this.velocity.x;
                }
                this.velocity.x = 0;
            }
        }
        
        

        
    }
    
    
}
//entities

//player class
class Player extends Entity {
    constructor(name, data) {
        super(name, data)
    }
    entityPlatformerInput() {
        this.velocity.x += (game.pressedKeys.includes("d") - game.pressedKeys.includes("a")) * 5;
        if (game.hitBoxCollision(this.position.x, this.position.y - 1, this.hitBox.bl, this.hitBox.bb, this.hitBox.br, this.hitBox.bt)) {
            this.velocity.y = game.pressedKeys.includes("w") * this.physicsPresets.jumpHeight;
        }
    }
    moveCamera() {
        game.camera.get(0).x += ((this.position.x - 480 + (this.hitBox.bW * 2)) - game.camera.get(0).x) / 5;
        game.camera.get(0).y += ((-this.position.y + 270 + (this.hitBox.bH * 2)) - game.camera.get(0).y) / 10;
        
    }
}

//cat class
class Cat extends Entity {
    constructor(name, data) {
        super(name, data)
    }
}

class Game {
    


    /**
     * @param {CanvasRenderingContext2D} context 
     */
    constructor(context) {
        
        //seed prompt
        //power ** so that it is easily customizable
        this.seed = prompt('Please enter a seed');
        this.seed = ((!(/^[A-z0-9\.?]*$/gmi).test(this.seed))) ? ranjs.core.int(1,2**32) : this.seed;
        //images
        this.backgroundImage = new Image();
        this.backgroundImage.src = 'background.png';

        this.tileData = new Array();
        this.entityData = new Set();
        //!grass isn't gonna be an entity but i need to test this
        //add entities
        this.player = new Player('player', { id: 0, position: { x: 100, y: 3000 }, velocity: { x: 1, y: 0 }});
        this.entityData.add(this.player);
        this.entityData.add(new Cat('cat', { id: 1, position: { x: 100, y: 3000 }, velocity: { x: 1, y: 0 }}));

        this.tileSetDefaults = ['leaves'];
        //gets entity player
        this.entityData.forEach(entity => {
            if (entity.name === 'player') {
                this.player = entity;
            }
        });

        
        
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
            .set('woodPlatform', new Tile('woodPlatform'))
        this.pressedKeys = new Array()
        this.tileDataDim = { w: 100, h: 100 };
        //controls the presets for level generation
        /**tileGenPresets*/
        this.tileGenPresets = {
            /** Water Level */
            waterLvl: 10,
            hillLength: 0.25,
            hillExtreme: 4
        };
        this.switchCamCoolDown = 0;
        
        this.basedist = new ranjs.dist.Normal(0,1)
        this.basedist.seed(this.seed)
        this.teraindist = new ranjs.dist.Normal(-1,1)
        this.teraindist.seed(this.seed)
        ranjs.core.seed(this.seed)
    }
    
    update() {

        this.player.entityPlatformerInput();
        this.player.moveCamera();

        //all entities
        this.entityData.forEach(entity => {
            entity.entityPhysics(true, 20);
        });

        

        
        if (Math.abs(this.camera.get(0).vec[0]) < 0.4) this.camera.get(0).vec[0] = 0;
        if (Math.abs(this.camera.get(0).vec[1]) < 0.4) this.camera.get(0).vec[1] = 0;
        this.camera.get(0).x += this.camera.get(0).vec[0];
        this.camera.get(0).y += this.camera.get(0).vec[1];
        if (this.pressedKeys.includes("p") && this.switchCamCoolDown < 0) {
            this.camera.get(0).size = this.camera.get(0).size == 1 ? 0.5 : 1;
            this.switchCamCoolDown = 100;
        }
        this.switchCamCoolDown -= 1;
        
        //temp tile size frame
        this.tW = this.tileDefaults.w * this.camera.get(0).size;
        this.tH = this.tileDefaults.h * this.camera.get(0).size;
        

        this.context.fillStyle = `hsl(240, 100, 50)`;
        this.context.fillRect(0, 0, board.width, board.height);

        //let cameraBorder = ((x, y, bl, bd, br, bt) => ({ x: ((x < bl) ? bl : (x > br) ? br : x), y: ((y > bd) ? bd : (y < bt) ? bt : y) }))(this.camera.get(0).x, this.camera.get(0).y, 0, 0, (this.tileDataDim.w ** 2) - board.width, -((this.tileDataDim.h ** 2) - board.height));
        //this.camera.get(0).x = cameraBorder.x;
        //this.camera.get(0).y = cameraBorder.y;
        
        

        if (this.camera.get(0).x < 0) this.camera.get(0).x = 0;
        if (this.camera.get(0).y > 0) this.camera.get(0).y = 0;
        if (this.camera.get(0).x > (this.tileDataDim.w * 80) - this.camera.get(0).w / this.camera.get(0).size) this.camera.get(0).x = (this.tileDataDim.w * 80) - this.camera.get(0).w / this.camera.get(0).size;
        if (this.camera.get(0).y < -(this.tileDataDim.h * 80) + this.camera.get(0).h / this.camera.get(0).size) this.camera.get(0).y = -(this.tileDataDim.h * 80) + this.camera.get(0).h / this.camera.get(0).size;
        //let selectedTile = getTileDataIndex(getMouseCameraPosition(0).x, getMouseCameraPosition(0).y);
        this.drawBackground();
        this.drawTiles();
        this.drawEntity()
        this.drawGUI();
        if (this.pressedKeys.includes("click")) this.setTile(Math.round(this.getMouseCameraPosition(0).x/this.tW), Math.round(Math.abs(this.getMouseCameraPosition(0).y/this.tH)), this.baseTiles.get('leaves'), true);

    }
    //! entity position is in the top left corner of the entity
    drawBackground() {
        this.context.drawImage(this.backgroundImage, (-this.camera.get(0).x/10), (-this.camera.get(0).y/20) - 500, this.backgroundImage.width * 8, this.backgroundImage.height * 8);
    }
    drawEntity() {
        this.entityData.forEach(entity => {
            this.context.drawImage(entity.image, (entity.position.x - this.camera.get(0).x) * this.camera.get(0).size, (-entity.position.y - this.camera.get(0).y) * this.camera.get(0).size + 540, (this.tW / 20) * this.player.dim.w, (this.tH / 20) * this.player.dim.h);
        });
    }
    drawTiles() {
        

        this.camSize = this.camera.get(0).size;
        this.tileDefaults.dox = ((Math.round(this.camera.get(0).x * this.camSize / (this.tW)) * (this.tW)) - (this.camera.get(0).x * this.camSize) - this.tW);// minused by tile width to avoid showing border space
        this.tileDefaults.doy = ((Math.round(this.camera.get(0).y * this.camSize / (this.tH)) * (this.tH)) - (this.camera.get(0).y * this.camSize) + board.height);
        this.tilesDrawn = 0;
        
        
        for (let dy = 0; dy < (this.tH / (this.tH / 80)) + 2; dy++) {
            for (let dx = 0; dx < (this.tW / (this.tW / 80)) + 2; dx++) {
                if (this.tileDefaults.dox + (dx * this.tW) > -this.tW && this.tileDefaults.dox + (dx * this.tW) < 960) {
                    let cTX = dx + Math.round(this.camera.get(0).x * this.camSize / this.tW) - 1;
                    let cTY = dy - Math.round(this.camera.get(0).y * this.camSize / this.tH) - 1
                    let currentTile = this.tileData[cTX][cTY]; //DEBUG needs to check if has an image key
                    if (currentTile && currentTile != this.baseTiles.get('air')) {
                        let drawnImage = currentTile.image;
                        if (currentTile == this.baseTiles.get('leaves')) {
                            drawnImage = new Image();
                            drawnImage.src = this.getTilesetImage(cTX, cTY, currentTile, [this.baseTiles.get('leaves'), this.baseTiles.get('log'), this.baseTiles.get('grass')]);
                            if (drawnImage.src.endsWith('leaves.png')) drawnImage.src = 'leavesBerryVariant.png';
                        }
                        this.context.drawImage(drawnImage, this.tileDefaults.dox + (dx * this.tW), this.tileDefaults.doy + (-dy * this.tH), this.tW+0.5, this.tH+0.5); //0.5 is to fix the white lines
                        this.tilesDrawn++;
                    }
                }
            }
        }
    }
    drawGUI() {
        const {round: r} = Math;
        this.context.font = 'bold 24px "Sans", "Courier", cursive';
        this.drawTextBorder(`${r(this.camera.get(0).x/this.tW)}, ${r(Math.abs(this.camera.get(0).y/this.tH))}`, 30, 50, 'black', 'white', 2);
        this.drawTextBorder(`Seed: ${this.seed}`, 30, 80, 'black', 'white', 2);
        //this.drawTextBorder(`Tiles Drawn: ${this.tilesDrawn.drawn}`, 30, 110, 'black', 'white', 2);
        //this.context.fillStyle = "black";
        
        //this.context.fillText(`${r(this.camera.get(0).x/this.tW)}, ${r(Math.abs(this.camera.get(0).y/this.tH))}`, 30, 50);
        //console.log(`${r(this.getMouseCameraPosition(0).x/this.tW)}, ${r(Math.abs(this.getMouseCameraPosition(0).y/this.tH))}`)
        
    }


    getMouseCameraPosition = (id) => ({ x: this.mouse.x + this.camera.get(id).x - 40, y: this.mouse.y + this.camera.get(id).y - 500 });
    
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
            let expand = Math.round(this.basedist.sample(1)); // this sample will return a number 0 -> 1 favoring one in the middle using a normal distribution curve
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
                this.generateCircle(_x + _xOffset + ranjs.core.int(0,5), _y + _yOffset, 6, this.baseTiles.get('leaves'));
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
            _x += ranjs.core.int(0,5);
            _y += ranjs.core.int(0,5);
        }
        //game.generateSquare(1, 1, 10, 10, _tileType, true, true, false);
    }
//! collision detection

    getTileDataIndex = (x, y) => ({ x: Math.round((x + 40) / this.tileDefaults.w) - 1, y: -Math.round((y + 60) / this.tileDefaults.h) + 7 });

    hitBoxCollision(_x, _y, _bl, _bb, _br, _bt, _key = 'solid', _val = true) {
        _bb += 320;
        _bt += 450;
        _br += 64;
        let pointCheck = this.getTileDataIndex(_x + _bl, _y + _bt);
        if (game.tileData[pointCheck.x][-pointCheck.y][_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _bl, _y + _bb);
        if (game.tileData[pointCheck.x][-pointCheck.y][_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _br, _y + _bt);
        if (game.tileData[pointCheck.x][-pointCheck.y][_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _br, _y + _bb);
        if (game.tileData[pointCheck.x][-pointCheck.y][_key] == _val) return true;
        return false;
    }
    //!tilesets
    getTilesetImage(_x, _y, _type, _connect) {
        if (_x == 0 || _x >= game.tileDataDim.w) _x = 1;
        if (_y == 0) _y = 1;
        //gets the code for the tileset
        let tlsCode = [
            _connect.includes(this.tileData.at(_x)?.at(_y+1)),
            _connect.includes(this.tileData.at(_x-1)?.at(_y)),
            _connect.includes(this.tileData.at(_x+1)?.at(_y)),
            _connect.includes(this.tileData.at(_x)?.at(_y-1))
        ]
        .map((a, ..._) => Number(a))
        .join('')
        /*
        new Array(3).fill(new Array(3).fill(0)) =>
        [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        */
        
        //gets the tileset image
        let n = _type.name;
        if (tlsCode == '1111') return `${n}.png`;
        if (tlsCode == '0000') return `${n}1.png`;
        if (tlsCode == '0111') return `${n}2.png`;
        if (tlsCode == '1101') return `${n}3.png`;
        if (tlsCode == '1110') return `${n}4.png`;
        if (tlsCode == '1011') return `${n}5.png`;
        if (tlsCode == '0110') return `${n}6.png`;
        if (tlsCode == '1001') return `${n}7.png`;
        if (tlsCode == '0101') return `${n}8.png`;
        if (tlsCode == '1100') return `${n}9.png`;
        if (tlsCode == '1010') return `${n}10.png`;
        if (tlsCode == '0011') return `${n}11.png`;
        if (tlsCode == '0001') return `${n}12.png`;
        if (tlsCode == '0100') return `${n}13.png`;
        if (tlsCode == '1000') return `${n}14.png`;
        if (tlsCode == '0010') return `${n}15.png`;

    }

    //! utils
    randomRange(_min, _max, _round = false) {
        return ranjs.core[_round ? 'int': 'float'](_min,_max)
    }



    drawTextBorder(_text, _x, _y, _color, _borderColor, _borderSize) {
        this.context.fillStyle = _borderColor;
        //corners
        this.context.fillText(_text, _x - _borderSize, _y - _borderSize);
        this.context.fillText(_text, _x + _borderSize, _y - _borderSize);
        this.context.fillText(_text, _x - _borderSize, _y + _borderSize);
        this.context.fillText(_text, _x + _borderSize, _y + _borderSize);
        //sides
        this.context.fillText(_text, _x, _y - _borderSize);
        this.context.fillText(_text, _x, _y + _borderSize);
        this.context.fillText(_text, _x - _borderSize, _y);
        this.context.fillText(_text, _x + _borderSize, _y);

        this.context.fillStyle = _color;
        this.context.fillText(_text, _x, _y);
    
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
for (let i = 0; i < game.tileDataDim.w; i++) {
    game.tileData.push(new Array(game.tileDataDim.h).fill(game.baseTiles.get('dirt')));
}



//generates the hills
let smoothness = 2;
for (let _y = 0; _y < game.tileDataDim.h; _y++) {
    for (let _x = 0; _x < game.tileDataDim.w; _x++) {
        smoothness += game.teraindist.sample(1);
        //avoids errors of cant div by 0
        if (smoothness == 0) smoothness = 1;
        //avoids terrain from become too smooth or too steep
        if (Math.abs(smoothness) > 2) smoothness = 4 * Math.sign(smoothness);
        //removes dirt by replacing it with air according to the sin wave
        if (_y /10 > (Math.sin(2*_x/8)*Math.cos(-2.5+_x/smoothness)) + game.tileGenPresets.waterLvl - 6) {
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
            ranjs.core.float(0,1) > 0.9 &&
            game.tileData[_x][_y] != game.baseTiles.get('log') &&
            game.tileData[_x][_y] != game.baseTiles.get('leaves')
        ) game.generateTree(_x, _y, 2, 4);
    }
}



//generate stone in ground
for (let i = 0; i < 10; i++) {
    game.generateCircle(ranjs.core.int(0,game.tileDataDim.w), ranjs.core.int(0,game.tileGenPresets.waterLvl), 4, game.baseTiles.get('stone'), true)
}

//generates caves
for (let a = 0; a < game.randomRange(10, 20, true); a++) {
    let x = game.randomRange(0, game.tileDataDim.w, true);
    let y = game.tileGenPresets.waterLvl;
    for (let i = 0; i < game.randomRange(4, 10, true); i++) {
        game.generateCircle(x, y, game.randomRange(3, 6, true), game.baseTiles.get('air'));
        x += game.randomRange(-5, 5, true);
        y += game.randomRange(-5, 5, true);
}
}

//generates house
//game.generateHouse(20, 20, 5, 5, game.baseTiles.get('hayBale'))

document.addEventListener('keydown', function (event) {
    if (event.key.length === 1 && !game.pressedKeys.includes(event.key)) game.pressedKeys.push(event.key);
});

document.addEventListener('keyup', function (event) {
    game.pressedKeys = game.pressedKeys.filter(key => key !== event.key);
});

document.addEventListener('mousedown', function (event) {
    if (!game.pressedKeys.includes(event.key)) game.pressedKeys.push("click");
});

document.addEventListener('mouseup', function (event) {
    game.pressedKeys = game.pressedKeys.filter(key => key !== 'click');
});


setInterval(_ => game.update(), 100/6)