const LinkedList = require("./linkedList");

const linkedList = new LinkedList();
linkedList.insert("apple");
linkedList.insert("orange");
console.log(linkedList.head.value);
console.log(linkedList.head.next.value);

const linkedList2 = new LinkedList();
linkedList2.insert("head");
console.log(linkedList2);
console.log(linkedList2.remove((node) => node.value === "head"));
console.log(linkedList2);