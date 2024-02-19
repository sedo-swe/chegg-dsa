/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insert(value);
  }

  pop() {
    return this.linkedList.remove((node, index) => index === this.linkedList.length - 1);
  }

  peek() {
    return this.linkedList.find((node, index) => index === this.linkedList.length - 1).value;
  }

  isEmpty() {
    return this.linkedList.length == 0;
  }
}

module.exports = Stack;
