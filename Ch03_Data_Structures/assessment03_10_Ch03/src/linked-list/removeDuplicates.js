const LinkedList = require("../../src/linked-list/linkedList");

/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  let pointer = sortedLinkedList.head;
  let prev = null;

  while (pointer) {
    if (prev && prev.value === pointer.value) {
      prev.next = pointer.next;
    }
    prev = pointer;
    pointer = pointer.next;
  }
  return sortedLinkedList;
}

const toString = (linkedList) => {
  let pointer = linkedList.head;
  while (pointer) {
    process.stdout.write(pointer.value + " "); 
    prev = pointer;
    pointer = pointer.next;
  }
  console.log();
}

const elements = [1, 1, 2];
const linkedList = new LinkedList();
// console.log(linkedList);
elements.forEach((element) => linkedList.insert(element));
// console.log(linkedList.head.next);
toString(linkedList);

console.log(linkedList.length);
removeDuplicates(linkedList);
// console.log(linkedList);
toString(linkedList);
console.log(linkedList.length);


module.exports = removeDuplicates;
