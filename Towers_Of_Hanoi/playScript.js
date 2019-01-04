const reader = require('readline');
// make sure to only open reader when needing input and close immediately after
// this way you can have "multiple" readers

const Game = require('./towers.js'); 

// Call newGame in the callback function, which only gets called if the player
// wins inside the initial ng.run(cb)
function newGame() {
    console.log('Welcome to Towers of Hanoi');
    const ng = new Game();
    ng.run(() => {
        console.log('You won');

        const rl = reader.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Play again? ', answer => {
            if (answer === 'yes') {
                rl.close();
                newGame();
            }
            else {
                rl.close();
                console.log('Thanks for playing.');
            }
        });
    });
}

// starts the game
newGame();