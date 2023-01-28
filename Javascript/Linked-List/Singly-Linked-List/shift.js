// https://dev.to/miku86/javascript-data-structures-singly-linked-list-shift-4gl0
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
    push(value) {
      const newNode = new Node(value);
      if (!this.length) this.head = newNode;
      else this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
    shift() {
      if (!this.length) return null;
      else {
        const nodeToRemove = this.head;
        this.head = this.head.next;
        this.length -= 1;
        if (!this.length) this.tail = null;
        return nodeToRemove;
      }
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL.shift());
newSLL.push("1st node");
console.log(newSLL.shift()); // Node { value: '1st node', next: null }
console.log(newSLL); // SinglyLinkedList { length: 0, head: null, tail: null }
newSLL.push("new 1st node");
newSLL.push("2nd node");
console.log(newSLL);
console.log(newSLL.shift());
console.log(newSLL);