// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-remove-a-node-at-a-specific-index-398c
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
    remove(index) {
      if (!this.length || index < 0 || index >= this.length) return null;
      else if (index === 0) return this.shift();
      else if (index === this.length - 1) return this.pop();
      else {
        const nodeToRemove = this.get(index);
        const prevNodeToRemove = nodeToRemove.prev;
        const nextNodeToRemove = nodeToRemove.next;
        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        prevNodeToRemove.next = nextNodeToRemove;
        nextNodeToRemove.prev = prevNodeToRemove;
        this.length -= 1;
        return nodeToRemove;
      }
    }
}
const newDLL = new DoublyLinkedList();
newDLL.push("new 0");
newDLL.push("new 1");
newDLL.push("new 2");
console.log(newDLL);
console.log(newDLL.remove(-1));
console.log(newDLL.remove(5));
console.log(newDLL.remove(0));
console.log(newDLL.remove(1));
console.log(newDLL);