/// <reference types="../@types/ranjs.d.ts">
/// <reference types="../@types/utils.d.ts>"
const Game = require(`./javascript/class/game`)

port
    .onmessage = function (data) {
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

        game.generateTerrain()

        //generates house
        //game.generateHouse(20, 20, 5, 5, game.baseTiles.get('hayBale'))

        document.addEventListener('keydown', function (event) {
            if (event.code === 'Escape') close()
            if (event.code === 'KeyM') reseed()
            if (event.code === 'KeyR') {
                game.generateTerrain()
                game.player.position = Object.assign(game.player.position, { x: 100, y: 3000 })
            }
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