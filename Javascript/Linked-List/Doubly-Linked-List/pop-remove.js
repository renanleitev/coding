// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-pop-remove-data-from-the-end-2fef
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
  pop() {
    if (!this.length) return null;
    else {
      const nodeToRemove = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } 
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        nodeToRemove.prev = null;
      }
      this.length -= 1;
      return nodeToRemove;
    }
  }
}
const newDLL = new DoublyLinkedList();
newDLL.push("A");
newDLL.push("B");
newDLL.push("C");
console.log(newDLL);
console.log(newDLL.pop());
console.log(newDLL);