const missingNumber = require("./missingNumber");
const minimumAndMaximum = require("./minimumAndMaximum");

console.log(missingNumber.missingNumberBruteForce([2, 5, 1, 4]));
console.log(missingNumber.missingNumberSum([2, 5, 1, 4]));

console.log(minimumAndMaximum.minimumAndMaximumSort([2, 5, 1, 4]));
console.log(minimumAndMaximum.minimumAndMaximumSort([-8, -3, -7, -9, -4, -1, -2, -5, -6]));

console.log(minimumAndMaximum.minimumAndMaximumIterate([2, 5, 1, 4]));
console.log(minimumAndMaximum.minimumAndMaximumIterate([-8, -3, -7, -9, -4, -1, -2, -5, -6]));

console.log(Math.max((Number.MIN_VALUE, -1)));

function compareRunningTime(func1, func2) {
    const start1 = Date.now();
    func1();
    const end1 = Date.now();
  
    const start2 = Date.now();
    func2();
    const end2 = Date.now();
  
    const time1 = end1 - start1;
    const time2 = end2 - start2;
  
    console.log(`Function 1 took ${time1}ms`);
    console.log(`Function 2 took ${time2}ms`);
  
    if (time1 < time2) {
      console.log('Function 1 is faster');
    } else if (time2 < time1) {
      console.log('Function 2 is faster');
    } else {
      console.log('Both functions took the same amount of time');
    }
  }