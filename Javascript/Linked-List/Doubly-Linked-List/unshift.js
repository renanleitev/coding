// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-unshift-add-data-to-the-beginning-1gd7
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
    unshift(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } 
      else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length += 1;
      return newNode;
    }
}
const newDLL = new DoublyLinkedList();
newDLL.push("A");
console.log(newDLL);
console.log(newDLL.unshift("0"));
console.log(newDLL);