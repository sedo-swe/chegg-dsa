// Linear Search
function indexOf(value, elements) {
    for (let index = 0; index < elements.length; index++) {
      if (elements[index] === value) {
        return index;
      }
    }
    return -1;
}

const index = indexOf(5, [1, 3, 5, 7, 9]);
console.log(index);


const people = [
    {
      id: 1,
      first_name: "Monah",
      last_name: "Yarnall",
      age: 17,
    },
    {
      id: 2,
      first_name: "Daphne",
      last_name: "McGaugey",
      age: 81,
    },
    {
      id: 3,
      first_name: "Walker",
      last_name: "Bucknell",
      age: 81,
    },
];

/* 
A better solution is to separate the matching logic from the linear search algorithm. 
To accomplish this, you can have the caller pass in a function that implements the matching logic 
(returning true when a matching element is found). 
Then the linear search algorithm can call that function to determine whether or not the current element is a match.
*/

// Linear search is a classic example of a brute-force algorithm.
