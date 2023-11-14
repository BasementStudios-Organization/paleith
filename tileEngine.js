let
    context,
    tileWidth = 80,
    tileHeight = 80,
    tileDrawX,
    tileDrawY,
    tileDrawOffsetX,
    tileDrawOffsety,
    camera = [JSON.parse('{"id":"0", "x":"0", "y":"0"}')],
    cameraMoveXVel = 0,
    cameraMoveYVel = 0,
    renderWidth = 14,
    renderHeight = 10,
    mouseX,
    mouseY,
    mouseCameraX;
const
    tileDataWidth = 100,
    tileDataHeight = 100;
//images

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
        if (additionalData) Object.entries(additionalData).forEach(([k,v]) => {this[k]= v})
    }
    break() {
        console.log('breaking...')
    }
}

// Add an event listener to the document for the mousemove event
document.addEventListener('mousemove', function (event) {
    // Get the mouse X and Y coordinates
    mouseX = event.offsetX;
    mouseY = event.offsetY;


    // Log the mouse coordinates to the console
    //console.log('Mouse X Coordinate:', mouseX);
    //console.log('Mouse Y Coordinate:', mouseY);
});




//tile data, very important
//datacontained in array, block data will be in json format eg). [[{},{}],[{},{}]]
const tilePresets = {
    grass: new Tile('grass'),
    stone: new Tile('stone'),
    hayBale: new Tile('hayBale'),
    air: new Tile('air'),
    dirt: new Tile('dirt'),
    log: new Tile('log')
};
var tileData = [];

for (let i = 0; i < tileDataHeight; i++) {
    let genCol = [];
    for (let v = 0; i < tileDataWidth; v++) {
        genCol.push(tilePresets.dirt);
    }
    tileData.push(genCol);
}



for (let _y = 0; _y < tileDataHeight; _y++) {
    for (let _x = 0; _x < tileDataWidth; _x++) {
        if (_y > (Math.sin(_x / 2) * 2) + 5) {
            tileData[_x][_y] = tilePresets.air;
        }
    }
}

for (let _y = 0; _y < tileDataHeight; _y++) {
    for (let _x = 0; _x < tileDataWidth; _x++) {

        if (tileData[_x][_y + 1] == tilePresets.air && tileData[_x][_y] != tilePresets.air) {
            tileData[_x][_y] = tilePresets.grass;
        }
    }
}

for (let _y = 0; _y < tileDataHeight; _y++) {
    for (let _x = 0; _x < tileDataWidth; _x++) {
        if (tileData[_x][_y + 1] == tilePresets.air && tileData[_x][_y] != tilePresets.air && Math.random() > 0.8 && tileData[_x][_y] != tilePresets.log) {
            generateTree(_x, _y, 2, 4);
        }
    }
}

generateCircle(10, 10, 5, tilePresets.stone)

console.log(tileData);

let pressedKeys = [];

document.addEventListener('keydown', function (event) {
    if (event.key.length === 1 && !pressedKeys.includes(event.key)) pressedKeys.push(event.key);
});

document.addEventListener('keyup', function (event) {
    pressedKeys = pressedKeys.filter(key => key !== event.key);
});


//board
window.onload = function () {
    board = document.getElementById("board");
    board.width = 960;
    board.height = 540;
    context = board.getContext("2d");
    context.imageSmoothingEnabled = false;
    setInterval(update, 10);
}

function update() {
    cameraMoveXVel = (pressedKeys.includes("d") - pressedKeys.includes("a")) * 10;
    cameraMoveYVel = (pressedKeys.includes("s") - pressedKeys.includes("w")) * 10;
    //cameraMoveXVel -= cameraMoveXVel/20;
    //cameraMoveYVel -= cameraMoveYVel/20;
    if (Math.abs(cameraMoveXVel) < 0.4) cameraMoveXVel = 0;
    if (Math.abs(cameraMoveYVel) < 0.4) cameraMoveYVel = 0;
    getCameraById(0).x += cameraMoveXVel;
    getCameraById(0).y += cameraMoveYVel;
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
    let cameraBorder = positionBorder(getCameraById(0).x, getCameraById(0).y, 0, 0, (tileDataWidth * tileWidth) - board.width, -((tileDataHeight * tileHeight) - board.height));
    getCameraById(0).x = cameraBorder.x;
    getCameraById(0).y = cameraBorder.y;
    // let selectedTile = getTileDataIndex(getMouseCameraPosition(0).x, getMouseCameraPosition(0).y);
    drawTiles();
}

function getCameraById(_id) {
    for (let i = 0; i < camera.length; i++) {
        if (camera[i].id == _id) {
            return camera[i];
        }
    }
}

function drawTiles() {
    let tileDrawOffsetX = (Math.round(getCameraById(0).x / (tileWidth)) * (tileWidth)) - getCameraById(0).x - tileWidth;// minused by tile width to avoid showing border space
    let tileDrawOffsetY = (Math.round(getCameraById(0).y / (tileHeight)) * (tileHeight)) - getCameraById(0).y + board.height;
    tileDrawX = 0;
    tileDrawY = 0;
    for (let i = 0; i < renderHeight; i++) {
        for (let v = 0; v < renderWidth; i++) {
            if (tileDrawOffsetX + (tileDrawX * tileWidth) > -tileWidth && tileDrawOffsetX + (tileDrawX * tileWidth) < 960) {
                let currentTile = tileData[tileDrawX + Math.round(getCameraById(0).x / tileWidth) - 1][tileDrawY - Math.round(getCameraById(0).y / tileHeight) - 1]; //DEBUG needs to check if has an image key
                if (currentTile != undefined) {
                    if (currentTile.image != tilePresets.air.image) {
                        context.drawImage(currentTile.image, tileDrawOffsetX + (tileDrawX * tileWidth), tileDrawOffsetY + (-tileDrawY * tileHeight), 80, 80);
                    }
                }

                //context.fillRect(tileDrawOffsetX + (tileDrawX * tileWidth), tileDrawOffsetY + (-tileDrawY * tileHeight), tileWidth, tileHeight);

            }
            tileDrawX += 1;
        }
        tileDrawX = 0;
        tileDrawY += 1;
    }
}

function positionBorder(_x, _y, _borderLeft, _borderDown, _borderRight, _borderTop) {
    if (_x < _borderLeft) {
        _x = _borderLeft; Math.round(_y / tileHeight)
    }
    if (_y > _borderDown) {
        _y = _borderDown;
    }
    if (_x > _borderRight) {
        _x = _borderRight;
    }
    if (_y < _borderTop) {
        _y = _borderTop;
    }
    return { "x": _x, "y": _y };
}

function getTileDataIndex(_x, _y) {
    return { "x": Math.round((_x + 40) / tileWidth) - 1, "y": -Math.round((_y + 60) / tileHeight) + 7 };
}

function getMouseCameraPosition(_camId) {
    return { "x": mouseX + camera[_camId].x, "y": mouseY + camera[_camId].y };
}

function setTile(_x, _y, _tile, _array = tileData) {
    if (_x >= 0 && _x < tileDataWidth && _y >= 0 && _y < tileDataHeight) {
        _array[_x][_y] = _tile;
    }


}


function generateTree(_xOffset, _yOffset, _thickness, _iterations) {
    setTile(_xOffset, _yOffset, tilePresets.log)
    let _x = 0;
    let _y = 0;
    for (let i = 0; i < 3; i++) {
        _y += 1;
        let expand = Math.round(Math.random() * 2 - 1);
        _x += (_x + _xOffset + expand >= 0 && _x + _xOffset + expand < tileDataWidth) ? expand : 0;
        setTile(_x + _xOffset - 1, _y + _yOffset, tilePresets.log);
        setTile(_x + _xOffset, _y + _yOffset, tilePresets.log);
        setTile(_x + _xOffset + 1, _y + _yOffset, tilePresets.log);
    }
    if (_iterations > 0) {
        generateTree(_x + _xOffset, _y + _yOffset, _thickness, _iterations - 1);
    }

}


//generated by github cop
function generateCircle(centerX, centerY, radius, tileType) {
    for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
            // Check if the current tile is within the circle
            if (x * x + y * y <= radius * radius) {
                // Set the tile at the current position to the specified tile type
                setTile(centerX + x, centerY + y, tileType);
            }
        }
    }
}