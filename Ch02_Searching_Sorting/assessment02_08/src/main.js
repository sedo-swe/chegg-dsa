const sortByName = require("./sortByName");
const searchByName = require("./searchByName");
const searchByEmail = require("./searchByEmail");
const data = require("./data.json");

const input = [
    { firstName: "b", lastName: "c" },
    { firstName: "a", lastName: "b" },
    { firstName: "a", lastName: "a" },
    { firstName: "b", lastName: "b" },
    { firstName: "c", lastName: "b" },
    { firstName: "a", lastName: "c" },
  ];
  const expected = [
    { firstName: "a", lastName: "a" },
    { firstName: "a", lastName: "b" },
    { firstName: "b", lastName: "b" },
    { firstName: "c", lastName: "b" },
    { firstName: "a", lastName: "c" },
    { firstName: "b", lastName: "c" },
  ];

console.log(sortByName(input));

console.log(searchByName("Alexandrine", "Kerluke", data));

console.log(searchByEmail("Roma_Halvorson@yahoo.com", data));
console.log(searchByEmail("Zola83@yahoo.com", data));