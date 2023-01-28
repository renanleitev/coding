// https://dev.to/miku86/javascript-data-structures-singly-linked-list-pop-1n94
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
      if (this.length > 0) this.tail.next = newNode;
      else this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
    pop() {
        if (!this.length) return null;
        else {
          let currentNode = this.head;
          let secondToLastNode = this.head;
          while (currentNode.next) {
            secondToLastNode = currentNode;
            currentNode = currentNode.next;
          }
          secondToLastNode.next = null;
          this.tail = secondToLastNode;
          this.length -= 1;
          if (!this.length) {
            this.head = null;
            this.tail = null;
          }
          return currentNode;
        }
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL);
newSLL.push("A");
console.log(newSLL);
newSLL.push("B");
console.log(newSLL);
console.log(newSLL.pop()); // Node { value: 'B', next: null }
console.log(newSLL.pop()); // Node { value: 'A', next: null }
console.log(newSLL.pop()); // null
console.log(newSLL); // SinglyLinkedList { length: 0, head: null, tail: null }