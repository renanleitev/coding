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
      if (!this.length) {
        this.head = newNode;
      } 
      else {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
    unshift(value) {
      const newHead = new Node(value);
      if (!this.length) {
        this.head = newHead;
        this.tail = newHead;
      } 
      else {
        newHead.next = this.head;
        this.head = newHead;
      }
      this.length += 1;
      return newHead;
    }
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      } 
      else {
        let count = 0;
        let currentNode = this.head;
  
        while (count < index) {
          currentNode = currentNode.next;
          count += 1;
        }
  
        return currentNode;
      }
    }
    insert(index, value) {
      if (index < 0 || index > this.length) {
        return null;
      } 
      else if (index === 0) {
        return this.unshift(value);
      } 
      else if (index === this.length) {
        return this.push(value);
      } 
      else {
        const preDesiredPlace = this.get(index - 1);
        const newNode = new Node(value);
        newNode.next = preDesiredPlace.next;
        preDesiredPlace.next = newNode;
        this.length += 1;
        return newNode;
      }
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL.insert(0, "A"));
// Node { value: 'A', next: null }

console.log(newSLL.insert(1, "B"));
// Node { value: 'B', next: null }

console.log(newSLL);
// SinglyLinkedList {
//   length: 2,
//   head: Node { value: 'A', next: Node { value: 'B', next: null } },
//   tail: Node { value: 'B', next: null }
// }

console.log(newSLL.insert(1, "N (between A and B)"));
// Node {
//   value: 'N (between A and B)',
//   next: Node { value: 'B', next: null }
// }

console.log(newSLL);
// SinglyLinkedList {
//   length: 3,
//   head: Node {
//     value: 'A',
//     next: Node { value: 'N (between A and B)', next: [Node] }
//   },
//   tail: Node { value: 'B', next: null }
// }