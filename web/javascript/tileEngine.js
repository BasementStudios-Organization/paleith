/// <reference types="../@types/ranjs.d.ts">
/// <reference types="../@types/utils.d.ts>"

const Game = require(`./javascript/class/game`)

port
    .onmessage = function (data) {
        console.log(data)
        if (data.data.env !== 'seed') return;
        /** @type {HTMLCanvasElement} */ const board = document.getElementById("board")
        board.width = 960;
        board.height = 540;
        const context = board.getContext("2d");
        context.imageSmoothingEnabled = false;

        const game = new Game(context, data.data.seed)

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
                if (_y / 10 > (Math.sin(2 * _x / 8) * Math.cos(-2.5 + _x / smoothness)) + game.tileGenPresets.waterLvl - 6) {
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
                    ranjs.core.float(0, 1) > 0.9 &&
                    game.tileData[_x][_y] != game.baseTiles.get('log') &&
                    game.tileData[_x][_y] != game.baseTiles.get('leaves')
                ) game.generateTree(_x, _y, 2, 4);
            }
        }



        //generate stone in ground
        for (let i = 0; i < 10; i++) {
            game.generateCircle(ranjs.core.int(0, game.tileDataDim.w), ranjs.core.int(0, game.tileGenPresets.waterLvl), 4, game.baseTiles.get('stone'), true)
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
            if (event.key === 'Escape') close()
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


        setInterval(_ => game.update(), Utils.FPS(50))
    }