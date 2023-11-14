var context;
var tileWidth = 80;
var tileHeight = 80;
var tileDrawX;
var tileDrawY;
var tileDrawOffsetX;
var tileDrawOffsety;
var camera = [JSON.parse('{"id":"0", "x":"0", "y":"0"}')];
var cameraMoveXVel = 0;
var cameraMoveYVel = 0;
var renderWidth = 14;
var renderHeight = 10;
var mouseX;
var mouseY;
var mouseCameraX;
const tileDataWidth = 100;
const tileDataHeight = 100;
//images
const grassImage = new Image();
grassImage.src = "grass.png";

const stoneImage = new Image();
stoneImage.src = "stone.png";

const hayBaleImage = new Image();
hayBaleImage.src = "hayBale.png";

const airImage = new Image();
airImage.src = "air.png";

const dirtImage = new Image();
dirtImage.src = "dirt.png";

const logImage = new Image();
logImage.src = "log.png";



// Add an event listener to the document for the mousemove event
document.addEventListener('mousemove', function(event) {
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
    "grass" : {"name" : "grass", "image": grassImage},
    "stone" : {"name" : "stone", "image": stoneImage},
    "hayBale" : {"name" : "hayBale", "image": hayBaleImage},
    "air" : {"name" : "air", "image": airImage},
    "dirt" : {"name" : "dirt", "image": dirtImage},
    "log" : {"name" : "log", "image": logImage}
};
var tileData = [];

for (let i = 0; i < tileDataHeight; i++) {
    let genCol = [];
    for (let i = 0; i < tileDataWidth; i++) {
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



console.log(tileData);


let pressedKeys = [];

document.addEventListener('keydown', function(event) {
  // Check if the pressed key is a letter
  if (event.key.length === 1) {
    // Add the pressed key to the array if not already present
    if (!pressedKeys.includes(event.key)) {
      pressedKeys.push(event.key);
    }
  }
});

document.addEventListener('keyup', function(event) {
  // Remove the released key from the array
  pressedKeys = pressedKeys.filter(key => key !== event.key);
});


//board
window.onload = function() {
    board = document.getElementById("board");
    board.width = 960;
    board.height = 540;
    context = board.getContext("2d");
    context.imageSmoothingEnabled = false;
    setInterval(update, 10);
}

function update() {
    cameraMoveXVel = (pressedKeys.includes("d") - pressedKeys.includes("a"))*10;
    cameraMoveYVel = (pressedKeys.includes("s") - pressedKeys.includes("w"))*10;
    //cameraMoveXVel -= cameraMoveXVel/20;
    //cameraMoveYVel -= cameraMoveYVel/20;
    if (Math.abs(cameraMoveXVel) < 0.4) {
        cameraMoveXVel = 0;
    }
    if (Math.abs(cameraMoveYVel) < 0.4) {
        cameraMoveYVel = 0;
    }

    getCameraById(0).x = (parseInt(getCameraById(0).x) + cameraMoveXVel);
    getCameraById(0).y = (parseInt(getCameraById(0).y) + cameraMoveYVel);// why is it like this?!?!?!?! RESEARCH

    context.fillStyle = "black";//draw board
    context.fillRect(0, 0, board.width, board.height);

    let cameraBorder = positionBorder(getCameraById(0).x, getCameraById(0).y, 0, 0, (tileDataWidth * tileWidth)-board.width, -((tileDataHeight * tileHeight)-board.height));
    getCameraById(0).x = cameraBorder.x;
    getCameraById(0).y = cameraBorder.y;
    let selectedTile = getTileDataIndex(getMouseCameraPosition(0).x, getMouseCameraPosition(0).y);
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
    var tileDrawOffsetX = (Math.round(getCameraById(0).x/(tileWidth))*(tileWidth)) - getCameraById(0).x - tileWidth;// minused by tile width to avoid showing border space
    var tileDrawOffsetY = (Math.round(getCameraById(0).y/(tileHeight))*(tileHeight)) - getCameraById(0).y + board.height;
    tileDrawX = 0;
    tileDrawY = 0;
    for (let i = 0; i < renderHeight; i++) {
        for (let i = 0; i < renderWidth; i++) {
            if (tileDrawOffsetX + (tileDrawX * tileWidth) > -tileWidth && tileDrawOffsetX + (tileDrawX * tileWidth) < 960) {
            let currentTile = tileData[tileDrawX + Math.round(getCameraById(0).x/tileWidth)-1][tileDrawY - Math.round(getCameraById(0).y/tileHeight)-1]; //DEBUG needs to check if has an image key
            if (currentTile != undefined) {
                if (currentTile.image != airImage) {
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
        _x = _borderLeft;Math.round(_y / tileHeight)
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
    return {"x" : _x, "y" : _y};
}

function getTileDataIndex(_x, _y) {
    return {"x" : Math.round((_x + 40) / tileWidth)-1, "y" : -Math.round((_y + 60) / tileHeight)+7};
}

function getMouseCameraPosition (_camId) {
    return {"x" : mouseX + camera[_camId].x, "y" : mouseY + camera[_camId].y};
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