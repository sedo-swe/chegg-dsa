// First solution
function sumIntegers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
}

function sumIntegers2(n) {
  return (n * (n + 1)) / 2;
}

console.log('====================================');
console.log('First solution');
console.log('====================================');
const N = 1000; // The input to the function
const start = process.hrtime.bigint(); // Note the start time

const answer = sumIntegers(N); // Call the function

const end = process.hrtime.bigint(); // Note the end time

console.log(`Summing ${N} numbers took ${end - start} nanoseconds`);

// Getting an average time
const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
// const N = 100;

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);

console.log('\n\n\n');
console.log('====================================');
console.log('Second solution');
console.log('====================================');

const start2 = process.hrtime.bigint(); // Note the start time

const answer2 = sumIntegers2(N); // Call the function

const end2 = process.hrtime.bigint(); // Note the end time

console.log(`Summing ${N} numbers took ${end2 - start2} nanoseconds`);

// Getting an average time
// const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
// const N = 100;

let sumOfRunningTime2 = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start2 = process.hrtime.bigint();

  const answer2 = sumIntegers2(N);

  const end2 = process.hrtime.bigint();

  sumOfRunningTime2 += end2 - start2;
}

const averageTime2 = sumOfRunningTime2 / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime2} nanoseconds`
);