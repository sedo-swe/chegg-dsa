function reverseIterative(list) {
    const reversedList = new LinkedList();
    let node = list.head;
    while (node) {
      reversedList.insertAtHead(node.value);
      node = node.next;
    }
    return reversedList;
}