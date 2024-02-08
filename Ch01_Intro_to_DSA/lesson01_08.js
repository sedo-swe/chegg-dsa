// GCD
/*
Algorithm 1
This algorithm was developed by Euclid (circa 300 B.C.).
*/
function gcd1(a, b) {
  // if a is equal to 0 then the GCD of a and b is b, so return b
  if (a === 0) {
    return b;
  }

  // if b is equal to 0 then the GCD of a and b is a, so return a
  if (b === 0) {
    return a;
  }

  while (b !== 0) {
    // let r be the remainder of dividing a by b
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}

/*
Algorithm 2
This is a brute-force approach to solving the GCD problem. 
It iterates over all the divisors of both a and b and finds 
the common ones then finds the largest.
*/
function gcd2(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const divA = [1, a];
  const divB = [1, b];
  const common = [];

  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  for (let i = 2; i < b; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  for (let i = 0; i < divA.length; i++) {
    if (divB.includes(divA[i])) {
      common.push(divA[i]);
    }
  }

  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < common.length; i++) {
    if (common[i] > largest) {
      largest = common[i];
    }
  }

  return largest;
}

// Split Sum
/*Algorithm 1
This algorithm works by first finding the sum of the whole array then iterating through the array. 
At each position i in the array, the sum from 0 to i is calculated from the total sum, and the sum from i+1 
to the end of the array is calculated from the total sum. These two sums are compared.
*/
function splitSum1(tours) {
  // find the sum of the whole array
  const total = tours.reduce((a, c) => a + c, 0); // O(n)

  let preSum = 0;
  let postSum = total;
  let smallest = Number.POSITIVE_INFINITY;

  // for loop goes from second element to second-to-last element
  for (let i = 0; i < tours.length - 1; i++) {
    preSum = preSum + tours[i];
    postSum = postSum - tours[i];

    const difference = Math.abs(preSum - postSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

/*
Algorithm 2
This algorithm once again iterates through the array of numbers. At each position i in the array, 
the sum of the numbers from position 0 to i is calculated, and the sum of the numbers from i+1 
to the end of the array is calculated. The difference is found and compared to the smallest number so far.
*/
function splitSum2(tours) {
    let smallest = Number.POSITIVE_INFINITY;
    for (let k = 0; k < tours.length; k++) {
        let preSum = tours.slice(0, k + 1).reduce((a, c) => a + c, 0);
        let postSum = tours.slice(k + 1).reduce((a, c) => a + c, 0);
        const difference = Math.abs(preSum - postSum);
        if (difference < smallest) {
            smallest = difference;
        }
    }
    return smallest;
}