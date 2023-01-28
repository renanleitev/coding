// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-push-add-data-to-the-end-5ad5
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
}
const newDLL = new DoublyLinkedList();
console.log(newDLL);
console.log(newDLL.push("new node 1"));
console.log(newDLL);
console.log(newDLL.push("new node 2"));
console.log(newDLL);