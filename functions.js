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

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));