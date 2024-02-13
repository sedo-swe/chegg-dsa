const search = require("./ch02_03_binaryIndexOf");

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at index", index);

    if (element === target) {
      return 0;
    }
    if (element < target) {
      return 1;
    }
    if (element > target) {
      return -1;
    }
  };
}

console.log(search(forNumber(274), elements));


const elements2 = [0, 3];
console.log(search(forNumber(3), elements2));