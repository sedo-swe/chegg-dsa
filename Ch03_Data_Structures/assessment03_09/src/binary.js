const Queue = require("./lib/queue");

const binary = (max) => {
    let binaries = [];
    for (let i=0; i<max; i++) {
        binaries.push(getInBinaryForm(i+1));
    }
    return binaries;
};

const getInBinaryForm = (n) => {
    let b = "";
    while (n > 0) {
        if (n & 1 != 0)
            b = "1" + b;
        else
            b = "0" + b;
        n = n >> 1;
    }
    return b;
}

const binaryWithQueue = (n) => {
    const q = new Queue();
    q.enqueue("1");
    const result = [];
    for (let i=1; i<n+1; i++) {
        let qe = q.dequeue();
        result.push(qe);
        q.enqueue(qe + "0");
        q.enqueue(qe + "1");
    }
    return result;
}

console.log(binaryWithQueue(5));

module.exports = binary;


/*
Generate binary numbers
Given a number max, write an algorithm that generates all binary integers from 1 to max.

Examples:

Input: max = 2
Output: ["1", "10"]

Input: max = 5
Output: ["1", "10", "11", "100", "101"]
An algorithm that uses a queue to solve the problem is given below.

1. Initialize an empty queue.
2. Enqueue the string 1. This represents binary number 1.
3. Initialize an empty array named result.
4. Iterate from 1 to max and do the following:
    1. Dequeue a value from the queue.
    2. Push the value into result.
    3. Append a 0 to the value and enqueue it.
    4. Append a 1 to the value and enqueue it.
5. Return result.
 */