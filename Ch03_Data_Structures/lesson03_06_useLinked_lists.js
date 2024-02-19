const LinkedList = require("./lesson03_06_Linked_lists");

const linkedList = new LinkedList();

linkedList.insertAtHead("One");
linkedList.insertAtHead(2);

console.log(linkedList);
console.log("\n\n\n");

const linkedList2 = new LinkedList();

linkedList2.insert("One");
linkedList2.insert(2);

console.log(linkedList2);
console.log("\n\n\n");

// You can use `find()` to update the value of a node in the list.
linkedList2.find((node) => node.value === "One").value = 1;

console.log(linkedList2);

console.log(
  "find 2",
  linkedList2.find((node) => node.value === 2)
);

console.log(
  "find 3",
  linkedList2.find((node) => node.value === 3)
);

console.log(linkedList2.find((node, index) => index === 1));
console.log("\n\n\n");


const linkedList3 = new LinkedList();

linkedList3.insert("One");
linkedList3.insert(2);

linkedList3.insert(1.5, (node) => node.value === "One");

console.log(linkedList3);