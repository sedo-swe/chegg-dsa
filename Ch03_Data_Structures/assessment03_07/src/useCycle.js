const cycle = require('./cycle');
const LinkedList = require("./lib/linkedList");


const list = new LinkedList([1]);
console.log(cycle(list));


const listSingleNodeCycle = new LinkedList([1]);
listSingleNodeCycle.head.next = listSingleNodeCycle.head;
console.log(cycle(listSingleNodeCycle));