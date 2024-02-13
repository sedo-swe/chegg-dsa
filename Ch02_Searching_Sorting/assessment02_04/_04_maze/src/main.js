const finder = require("./maze");

let mySmallMaze1 = [
    [" ", "*", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
];
console.log("DDRR == " + finder(mySmallMaze1, [0, 0]));

let anotherSmallMaze1 = [
    [" ", " ", "*"],
    ["*", " ", "*"],
    [" ", " ", "*"],
    [" ", "*", "*"],
    [" ", " ", "e"],
];
console.log("RDDLDDRR == " + finder(anotherSmallMaze1, [0, 0]));

let mySmallMaze2 = [
    [" ", "*", " "],
    [" ", " ", " "],
    [" ", "*", "e"],
];
console.log("DRRD == " + finder(mySmallMaze2, [0, 0]));

let anotherzSmallMaze2 = [
    [" ", " ", "*"],
    ["*", " ", "*"],
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", "*", "e"],
];
console.log("RDDRDD == " + finder(anotherzSmallMaze2, [0, 0]));

let mySmallMaze3 = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
console.log("RRDD == " + finder(mySmallMaze3, [0, 0]));

let anotherSmallMaze3 = [
    [" ", " ", "*"],
    ["*", " ", "*"],
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
];
console.log("RDDRDD == " + finder(anotherSmallMaze3, [0, 0]));

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
console.log("RRDDLLDDRRRRRR == " + finder(maze, [0, 0]));

// let maze1 = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', 'e', ' ']
// ];
// console.log(finder(maze1, [0, 0]));