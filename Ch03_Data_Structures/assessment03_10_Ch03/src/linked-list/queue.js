const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
  }

  dequeue() {
    return this.linkedList.remove((node, index) => index === 0);
  }

  peek() {
    return this.linkedList.find((node, index) => index === 0).value;
  }

  isEmpty() {
    return this.linkedList.length == 0;
  }
}

const testQ = new Queue();
console.log(testQ.first);
console.log(testQ.isEmpty());

module.exports = Queue;
