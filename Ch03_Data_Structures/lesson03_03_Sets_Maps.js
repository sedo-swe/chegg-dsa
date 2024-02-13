/////////////////////////////////////////////////
// Set: A collection of unique values
/////////////////////////////////////////////////

const numbers = new Set(); // Empty Set []

numbers.add(3); // Set contains [3]
numbers.add(7); // Set contains [3, 7]
numbers.add(5); // Set contains [3, 7, 5]

numbers.add(3); // Set still contains [3, 7, 5]

numbers.delete(5); // Set contains [3, 7]

// Find the sum of all numbers in the Set
let sum1 = 0;
for (let num of numbers.values()) {
    sum1 = sum1 + num;
}
console.log(sum1); // 3 + 7 = 10

// Find the sum of all numbers in the Set
let sum2 = 0;
numbers.forEach((e) => (sum2 = sum2 + e));
console.log(sum2); // 3 + 7 = 10

/*
Relationship to arrays
Sometimes, while working with a collection of values, you need the methods of an array. And at other times, 
you need the properties of the Set. It is easy to convert an array into a Set and a Set into an array.
*/
const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades); // Duplicates will be removed

for (let grade of uniqueGrades.values()) {
  console.log(grade); // 'B', 'F', 'A', 'D'
}

const distinctGrades = [...uniqueGrades]; // Array contains ['B', 'F', 'A', 'D']

numbers.has(3); //true
numbers.has(8); //false
uniqueGrades.has("C"); // false

// How many unique characters are in the term 'Data Structures'?
const word = "Data Structures";

// Create a Set - lowercase the word
const set = new Set(word.toLowerCase());

// Size of the Set is the number of unique characters
console.log(set.size);

/*
The efficiency of Sets
The JavaScript specification doesn't say how the implementation of the Set is to be done 
by the various JavaScript engines. But it does say that the operations on a Set must be at most O(n). 
There are several ways that the implementation may be carried out. 
These values are the expected runtime for one such implementation.

Description     Notation    Explanation
===================================================================================================================
add()           O(1)        The specific implementation may differ, but you can generally expect this to be O(1).

delete()        O(1)        Also depends on the implementation details.

forEach()       O(n)        It is clear that this requires a loop through all the values of the Set.

has()           O(1)        At best, it takes a single operation to determine if a value exists or not.
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////
// Map: A collection of key-value pairs that remembers the insertion order of the keys
/////////////////////////////////////////////////////////////////////////////////////////////////////

const addressBook = new Map(); // An empty Map

addressBook.set("sherlock", {
    email: "holmes@scotlandyard.com",
    address: "221B Baker Street, London",
});

addressBook.set("hercule", {
    email: "poirot@scotlandyard.com",
    address: "Flat 203 at 56B Whitehaven Mansions",
});

// Attempting to add a second entry with the same key results in replacing the original value. The keys are never duplicated.

addressBook.set("sherlock", {
  email: "jones@nypd.com",
  address: "13 5th Avenue, Queens",
});

console.log(addressBook.size); // 2

const poirot = addressBook.get("hercule"); // gets {email: "poirot@scotlandyard.com", address: "Flat 203 at 56B Whitehaven Mansions"}

addressBook.delete("sherlock");

for (let key of addressBook.keys()) {
    console.log(key);
}

for (let value of addressBook.values()) {
    console.log(value);
}

const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

for (let [key, value] of months.entries()) {
    console.log(`${key + 1} : ${value}`); // print 1: January etc
}

months.forEach((value, key) => console.log(`${key + 1} : ${value}`)); // print 1: January etc

const days = [
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
];
  
const dayMap = new Map(days);

const dayArray = [...dayMap];
// results in:
// [
//   [0, "Sunday"],
//   [1, "Monday"],
//   [2, "Tuesday"],
//   [3, "Wednesday"],
//   [4, "Thursday"],
//   [5, "Friday"],
//   [6, "Saturday"],
// ]

/**
The efficiency of Maps
    Maps are very efficient at inserting and looking up values by keys.

Description     Notation    

set()           O(1)

delete()        O(1)

get()           O(1)

has()           O(1)
 */