/*
function missing1
  // accepts: A an array of N - 1 numbers

  declare a variable N and set it equal to the length of A + 1
  for i = 1 to N do
    declare variable found and set it to false
    declare variable j and set it to 0
     while found is false AND j is less than the length of A do
      if i is equal to A[j] then
        set found to true
      increment j
    if found is false then
      return i
*/
function missing1(A) {
    const N = A.length + 1;
    for (let i=1; i<=N; i++) {
        let found = false;
        let j = 0;
        while (!found && j<A.length) {
            if (i == A[j]) {
                found = true;
            }
            j++;
        }
        if (!found) {
            return i;
        }
    }
}

console.log(missing1([8, 3, 4, 1, 2, 9, 10, 5, 7]));

/*
function missing2
  // accepts: A an array of N - 1 numbers

  declare a variable N and set it equal to the length of A + 1
  declare a variable fullSum and set it to the sum of numbers from 1 to N inclusive
  declare a variable sum. Find the sum of all numbers in A and store the sum in the variable sm
  return the difference between fullSum and sum (i.e. fullSum - sum)
*/
function missing2(A) {
    const N = A.length + 1;
    let fullSum = 0;
    for (let i=1; i<=N; i++) {
        fullSum = fullSum + i;
    }

    let sum = 0;
    for (let i=0; i<N-1; i++) {
        sum = sum + A[i];
    }
    return (fullSum - sum);
}

console.log(missing2([8, 3, 4, 1, 2, 9, 10, 5, 7]));


export { missing1, missing2 };