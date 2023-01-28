// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-insert-a-new-node-at-a-specific-index-317d
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
    get(index) {
      if (!this.length || index < 0 || index >= this.length) return null;
      else {
        let currentNode;
        if (index < this.length / 2) {
          let counter = 0;
          currentNode = this.head;
          while (counter < index) {
            currentNode = currentNode.next;
            counter += 1;
          }
        } 
        else {
          let counter = this.length - 1;
          currentNode = this.tail;
          while (counter > index) {
            currentNode = currentNode.prev;
            counter -= 1;
          }
        }
        return currentNode;
      }
    }
    insert(index, value) {
      if (index < 0 || index > this.length) return null;
      else if (index === 0) return this.unshift(value);
      else if (index === this.length) return this.push(value);
      else {
        const newNode = new Node(value);
        const newPrevNode = this.get(index - 1);
        const newNextNode = newPrevNode.next;
        newNode.prev = newPrevNode;
        newPrevNode.next = newNode;
        newNode.next = newNextNode;
        newNextNode.prev = newNode;
        this.length += 1;
        return newNode;
      }
    }
}
const newDLL = new DoublyLinkedList();
console.log(newDLL.insert(-1, "too low"));
console.log(newDLL.insert(0, "at 0"));
console.log(newDLL.insert(1, "at 1"));
console.log(newDLL.insert(1, "new at 1"));
console.log(newDLL);
