const reader = require('readline');

const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        rl.close();
        completionCallback(sum);
    };
    let total = sum;
    if (numsLeft > 0) {
        rl.question('Give a number: ', number => {
            const num = parseInt(number);
            console.log(total += num);
            addNumbers(total, --numsLeft, completionCallback);
        });
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, cb) {
    rl.question(`Is ${el1} > ${el2}: `, answer => {
        answer === "yes" ? cb(true) : cb(false); 
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) {
        //Base case, should give OBSL false
        outerBubbleSortLoop(madeAnySwaps);
    }
    else {
        askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
            if (isGreaterThan) {
                madeAnySwaps = true; 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }

            innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
        });
    }
}

// askIfGreaterThan(1,2, x => console.log(`${x} you did it!`));
// let arr = [3,2,1];
// innerBubbleSortLoop(arr, 0, false, function(x) {console.log(x);});

function absurdBubbleSort(arr, completeCB) {
    function outerBubbleSortLoop(isSwapped){
        if (isSwapped) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }
        else {
            //If no more swaps made, complete
            completeCB(arr);
        }
    }

    outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     rl.close();
// });

Function.prototype.myBind = function(context) {
    return () => this.apply(context); 
}

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"