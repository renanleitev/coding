// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-shift-remove-data-from-the-beginning-dnm
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
class DoublyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    push(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } 
      else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length += 1;
      return newNode;
    }
    shift() {
      if (!this.length) return null;
      const nodeToRemove = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } 
      else {
        this.head = nodeToRemove.next;
        this.head.prev = null;
        nodeToRemove.next = null;
      }
      this.length -= 1;
      return nodeToRemove;
    }
}
const newDLL = new DoublyLinkedList();
newDLL.push("A");
newDLL.push("B");
console.log(newDLL);
console.log(newDLL.shift());
console.log(newDLL);