// https://dev.to/miku86/javascript-data-structures-singly-linked-list-set-2cj8
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
    get(index) {
      if (index < 0 || index >= this.length) return null;
      else {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
          currentNode = currentNode.next;
          count += 1;
        }
        return currentNode;
      }
    }
    set(index, value) {
      const currentNode = this.get(index);
      if (currentNode) {
        currentNode.value = value;
        return currentNode;
      } 
      return null;
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL);
console.log(newSLL.set(0, "new 0"));
console.log(newSLL);
newSLL.push("0");
newSLL.push("1");
console.log(newSLL.set(0, "new 0")); // Node { value: 'new 0', next: Node { value: '1', next: null } }
console.log(newSLL.set(1, "new 1")); // Node { value: 'new 1', next: null }
console.log(newSLL);