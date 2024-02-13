/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum.
 */
function minimumAndMaximumSort(numbers) {
    if(numbers.length == 0) return numbers;
    const sorted = numbers.sort((a, b) => a - b);
    return [sorted[0], sorted[sorted.length - 1]];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum.
 */
function minimumAndMaximumIterate(numbers) {
    if(numbers.length == 0) return numbers;
    if(Array.isArray(numbers)) {
      let min = Number.MAX_VALUE;
      let max = Number.MIN_SAFE_INTEGER;
      for (let num of numbers) {
          min = Math.min(min, num);
          max = Math.max(max, num);
      }
      return [min, max];
    }
    return [];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
