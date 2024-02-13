/**
 * Implement a brute force algorithm for finding the missing number in an array.
 */
function missingNumberBruteForce(numbers) {
  for (let i=0; i<numbers.length+1; i++) {
    let found = false;
    for (let j=0; j<numbers.length; j++) {
      if ((i+1) == numbers[j]) {
        found = true;
      }
    }
    if (!found) return (i+1);
  }
}

/**
* Use an iterative  strategy for finding the missing number in an array.
*/
function missingNumberSum(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length+1; i++) {
      sum += (i+1);
  }
  let missingSum = 0;
  for(let number of numbers) {
      missingSum += number;
  }

  return sum - missingSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
