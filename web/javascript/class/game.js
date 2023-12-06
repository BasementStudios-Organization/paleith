const ranjs = require('../ranjs/index.js')

const Camera = require('./camera')
const Tile = require('./tile')
const Cat = require('./cat')
const Player = require('./player')
const Platypus = require('./platypus')

module.exports = class Game {
    /**
     * @param {CanvasRenderingContext2D} context 
     * @param {number | string} seed
     */
    constructor(context, seed) {
        //seed prompt
        //power ** so that it is easily customizable
        this.seed = (((/^[^\w.\?\:\\\/\<\>\(\)\[\]\"\'\`\-\_\+\=\!\@\#\$\%\^\&\*\~\{\}\|]*$/gmi).test(String(seed)))) ? ranjs.core.int(1, 2 ** 32) : seed;
        //images
        this.backgroundImage = new Image();
        this.backgroundImage.src = '../web/assets/images/background.png';

        this.tileData = new Array();
        this.entityData = new Set();
        //!grass isn't gonna be an entity but i need to test this
        //add entities
        this.player = new Player('player', { id: 0, position: { x: 100, y: 3000 }, velocity: { x: 1, y: 0 } }, this);
        this.entityData.add(this.player);
        this.entityData.add(new Cat('cat', { id: 1, position: { x: 100, y: 3000 }, velocity: { x: 1, y: 0 } }, this));
        this.entityData.add(new Platypus('platypus', { id: 1, position: { x: 200, y: 3000 }, velocity: { x: 1, y: 0 } }, this));

        this.tileSetDefaults = ['leaves'];
        //gets entity player
        //* this.player = Array.from(this.entityData.values()).find((e) => e.name === 'player')
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
        // 3X4
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
        this.tileDataDim = { w: 50, h: 50 };
        this.tileGenPresets = {
            /** Water Level */
            waterLvl: 10,
            hillLength: 0.25,
            hillExtreme: 4
        };
        this.switchCamCoolDown = 0;
    }

    generateTerrain() {
        this.basedist = new ranjs.dist.Normal(0, 1)
        this.basedist.seed(this.seed)
        this.teraindist = new ranjs.dist.Normal(-1, 1)
        this.teraindist.seed(this.seed)
        ranjs.core.seed(this.seed)
        for (let i = 0; i < this.tileDataDim.w; i++) {
            this.tileData.push(new Array(this.tileDataDim.h).fill(this.baseTiles.get('dirt')));
        }

        //generates the hills
        let smoothness = 2;
        for (let _y = 0; _y < this.tileDataDim.h; _y++) {
            for (let _x = 0; _x < this.tileDataDim.w; _x++) {
                smoothness += this.teraindist.sample(1);
                //avoids errors of cant div by 0
                if (smoothness == 0) smoothness = 1;
                //avoids terrain from become too smooth or too steep
                if (Math.abs(smoothness) > 2) smoothness = 4 * Math.sign(smoothness);
                //removes dirt by replacing it with air according to the sin wave
                if (_y / 10 > (Math.sin(2 * _x / 8) * Math.cos(-2.5 + _x / smoothness)) + this.tileGenPresets.waterLvl - 6) {
                    this.setTile(_x, _y, this.baseTiles.get('air'));
                }
            }
        }

        //generates grass on top
        for (let _y = 0; _y < this.tileDataDim.h; _y++) {
            for (let _x = 0; _x < this.tileDataDim.w; _x++) {
                if (
                    this.tileData[_x][_y + 1] == this.baseTiles.get('air') &&
                    this.tileData[_x][_y] != this.baseTiles.get('air')
                ) this.tileData[_x][_y] = this.baseTiles.get('grass');
            }
        }

        // generates trees
        for (let _y = 0; _y < this.tileDataDim.h; _y++) {
            for (let _x = 0; _x < this.tileDataDim.w; _x++) {
                if (
                    this.tileData[_x][_y + 1] == this.baseTiles.get('air') &&
                    this.tileData[_x][_y] != this.baseTiles.get('air') &&
                    ranjs.core.float(0, 1) > 0.9 &&
                    this.tileData[_x][_y] != this.baseTiles.get('log') &&
                    this.tileData[_x][_y] != this.baseTiles.get('leaves')
                ) this.generateTree(_x, _y, 2, 4);
            }
        }



        //generate stone in ground
        for (let i = 0; i < 10; i++) {
            this.generateCircle(ranjs.core.int(0, this.tileDataDim.w), ranjs.core.int(0, this.tileGenPresets.waterLvl), 4, this.baseTiles.get('stone'), true)
        }

        //generates caves
        for (let a = 0; a < this.randomRange(10, 20, true); a++) {
            let x = this.randomRange(0, this.tileDataDim.w, true);
            let y = this.tileGenPresets.waterLvl;
            for (let i = 0; i < this.randomRange(4, 10, true); i++) {
                this.generateCircle(x, y, this.randomRange(3, 6, true), this.baseTiles.get('air'));
                x += this.randomRange(-5, 5, true);
                y += this.randomRange(-5, 5, true);
            }
        }
    }

    update() {
        this.player.entityPlatformerInput();
        this.player.moveCamera();
        this.entityData.forEach(entity => {entity.entityPhysics()});
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
        if (this.pressedKeys.includes("click")) this.setTile(Math.round(this.getMouseCameraPosition(0).x / this.tW), Math.round(Math.abs(this.getMouseCameraPosition(0).y / this.tH)), this.baseTiles.get('air'), true);

    }

    //! entity position is in the top left corner of the entity
    drawBackground() {
        this.context.drawImage(this.backgroundImage, (-this.camera.get(0).x / 10), (-this.camera.get(0).y / 20) - 500, this.backgroundImage.width * 8, this.backgroundImage.height * 8);
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
                            if (drawnImage.src.endsWith('leaves.png')) drawnImage.src = '../web/assets/images/leavesBerryVariant.png';
                        }
                        this.context.drawImage(drawnImage, this.tileDefaults.dox + (dx * this.tW), this.tileDefaults.doy + (-dy * this.tH), this.tW + 0.5, this.tH + 0.5); //0.5 is to fix the white lines
                        this.tilesDrawn++;
                    }
                }
            }
        }
    }

    drawGUI() {
        const { round: r } = Math;
        this.context.font = 'bold 24px "monocraft","Sans", "Courier", cursive';
        this.drawTextBorder(`Camera Position: ${r(this.camera.get(0).x / this.tW)}, ${r(Math.abs(this.camera.get(0).y / this.tH))}`, 30, 50, 'black', 'white', 2);
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
                this.generateCircle(_x + _xOffset + ranjs.core.int(0, 5), _y + _yOffset, 6, this.baseTiles.get('leaves'));
            }
        }
    }

    //circle function by github copilot
    generateCircle(centerX, centerY, radius, tileType) {
        for (let y = -radius; y <= radius; y++) {
            for (let x = -radius; x <= radius; x++) {
                // Check if the point is within the circle's radius
                if (x * x + y * y <= radius * radius) {
                    this.setTile(centerX + x, centerY + y, tileType);
                }
            }
        }
    }

    //generate square
    generateSquare(_l, _b, _r, _t, _tileType, _hollow = false, _makeHollow = false, _replace = true) {
        let _width = Math.abs(_r) + Math.abs(_l);
        let _height = Math.abs(_t) + Math.abs(_b);
        for (let y = _b; y < _height; y++) {
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
            this.generateSquare(_x, _y, _y + _h, _x + _w, _tileType, true, true, false);
            _x += ranjs.core.int(0, 5);
            _y += ranjs.core.int(0, 5);
        }
        //this.generateSquare(1, 1, 10, 10, _tileType, true, true, false);
    }
    //! collision detection

    getTileDataIndex = (x, y) => ({ x: Math.round((x + 40) / this.tileDefaults.w) - 1, y: -Math.round((y + 60) / this.tileDefaults.h) + 7 });

    hitBoxCollision(_x, _y, _bl, _bb, _br, _bt, _key = 'solid', _val = true) {
        _bb += 320;
        _bt += 450;
        _br += 64;
        let pointCheck = this.getTileDataIndex(_x + _bl, _y + _bt);
        if (this.tileData.at(pointCheck.x)?.at(-pointCheck.y)[_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _bl, _y + _bb);
        if (this.tileData.at(pointCheck.x)?.at(-pointCheck.y)[_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _br, _y + _bt);
        if (this.tileData.at(pointCheck.x)?.at(-pointCheck.y)[_key] == _val) return true;
        pointCheck = this.getTileDataIndex(_x + _br, _y + _bb);
        if (this.tileData.at(pointCheck.x)?.at(-pointCheck.y)[_key] == _val) return true;
        return false;
    }
    //!tilesets
    getTilesetImage(_x, _y, _type, _connect) {
        if (_x == 0 || _x >= this.tileDataDim.w) _x = 1;
        if (_y == 0) _y = 1;
        //gets the code for the tileset
        let tlsCode = [
            _connect.includes(this.tileData.at(_x)?.at(_y + 1)),
            _connect.includes(this.tileData.at(_x - 1)?.at(_y)),
            _connect.includes(this.tileData.at(_x + 1)?.at(_y)),
            _connect.includes(this.tileData.at(_x)?.at(_y - 1))
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
        const tlsCodesToNumber = {
            '1111': '',
            '0000': 1,
            '0111': 2,
            '1101': 3,
            '1110': 4,
            '1011': 5,
            '0110': 6,
            '1001': 7,
            '0101': 8,
            '1100': 9,
            '1010': 10,
            '0011': 11,
            '0001': 12,
            '0100': 13,
            '1000': 14,
            '0010': 15,
        }
        return `../web/assets/images/${_type.name}${tlsCodesToNumber[tlsCode]}.png`
    }

    //! utils
    randomRange(_min, _max, _round = false) {
        return ranjs.core[_round ? 'int' : 'float'](_min, _max)
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