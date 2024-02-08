/**
 The cable problem
 Implement algorithm 1 here

 function cable1
   // accepts: currentLength - an integer between 1 and 1,000,000,000
   //          requireLength - an integer between 1 and 1,000,000,000
   //          saleLength - an integer between 1 and 1,000,000,000

   declare a variable named count and set it equal to 0
   declare a variable named i and set it equal to currentLength
   while i is less than requiredLength do
       Add saleLength to i
       increment count
   return count
*/
function cable1(currentLength, requireLength, saleLength) {
    let count = 0;
    let i = currentLength;
    while (i<requireLength) {
        i+=saleLength;
        count++;
    }
    return count;
}

console.log(cable1(2.5, 10, 2));

/**
 The cable problem
 Implement algorithm 2 here

 function cable2
   // accepts: currentLength - an integer between 1 and 1,000,000,000
   //          requireLength - an integer between 1 and 1,000,000,000
   //          saleLength - an integer between 1 and 1,000,000,000

   declare a variable named distance, assign it to the difference between requiredLength and currentlength
   declare a variable named total, 
   divide distance by saleLength and round up to the nearest integer, assign this value to total
   return total
*/

function cable2(currentLength, requireLength, saleLength) {
    let distance = requireLength - currentLength;
    let total;
    total = Math.round(distance / saleLength);
    return total;
}

console.log(cable2(2.5, 10, 2));

export { cable1, cable2 };