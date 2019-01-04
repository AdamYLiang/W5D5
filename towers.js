const reader = require('readline');

const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Game() {
    this.towers = [[3,2,1],[],[]];
}

Game.prototype.promptMove = function(cb) {
    console.log(this.print());
    rl.question('Make a move (from,to): ', answer => {
        const startTowerIdx = parseInt(answer[0]);
        const endTowerIdx = parseInt(answer[answer.length - 1]);
        if (this.move(startTowerIdx, endTowerIdx)) {
            this.run(cb);
        }
        else {
            console.log('invalid move');
            rl.close();
        }
    });
};

Game.prototype.isValidMove = function(start, end) {
    let start_top = this.towers[start];
    let end_top = this.towers[end];
    if (start_top.length === 0) return false;
    if (end_top.length === 0) return true;

    return start_top[start_top.length - 1] < end_top[end_top.length - 1] ? true : false; 
};

Game.prototype.move = function(start, end) {
    if (this.isValidMove(start, end)) {
        this.towers[end].push(this.towers[start].pop());
        return true;
    }
    return false;
};

Game.prototype.print = function() {
    return JSON.stringify(this.towers);
};

Game.prototype.isWon = function() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
        return true;
    }
    return false;
};

Game.prototype.run = function(completeCB) {
    if (this.isWon()) {
        completeCB();
    } else {
        this.promptMove(completeCB);
    }
};

const fungame = new Game(); 
fungame.run(() => {
    console.log('You won');
    rl.close();
});
// console.log(fungame.move(0,1));
// console.log(fungame.towers);
// console.log(fungame.move(0,1));
// console.log(fungame.towers);
// console.log(fungame.isValidMove(0, 1));
// console.log(fungame.isValidMove(1, 0));