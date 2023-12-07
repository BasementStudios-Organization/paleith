const Game = require(`${__dirname}/../class/game`);
const Utils = require(`${__dirname}/../utils/index`);

let loop;

onSeed((_, data) => {
    /** @type {HTMLCanvasElement} */
    const board = document.getElementById("board")
    board.width = 960;
    board.height = 540;
    const context = board.getContext("2d");
    context.imageSmoothingEnabled = false;
    const game = new Game(context, data)
    const reset = (x) => {
        x.generateTerrain()
        x.player.position = Object.assign(x.player.position, { x: 100, y: 3000 })
    }

    ipc.on('web:reset', () => reset(game))

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
        if (event.code === 'KeyR') reset(game)
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

    if (loop) clearInterval(loop)
    loop = setInterval(_ => game.update(), Utils.FPS(50))
})