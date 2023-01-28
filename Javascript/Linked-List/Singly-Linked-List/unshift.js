// https://dev.to/miku86/javascript-data-structures-singly-linked-list-unshift-97b
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    unshift(value) {
      const newNode = new Node(value);
      if (!this.length) this.tail = newNode;
      else newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return newNode;
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL);
console.log(newSLL.unshift("1"));
console.log(newSLL);
console.log(newSLL.unshift("2"));
console.log(newSLL);