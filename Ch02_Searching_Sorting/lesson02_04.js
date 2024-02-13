function factorial(number) {
  // Base case
  if (number <= 1) {
    return 1;
  }

  // Penultimate means second to the last in a series.
  let penultimate = 1;
  let total = 0;

  // Calculate the factorial from 1 to `number`
  for (let ultimate = 1; ultimate <= number; ultimate++) {
    console.log(ultimate, "*", penultimate);
    total = ultimate * penultimate;
    penultimate = total;
  }
  return total;
}


function sum(n) {
  // Check the base case
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}