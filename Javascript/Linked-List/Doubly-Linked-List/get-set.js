// https://dev.to/miku86/javascript-data-structures-doubly-linked-list-set-update-a-specific-node-3kd5
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
    set(index, value) {
      const currentNode = this.get(index);
      if (currentNode) {
        currentNode.value = value;
        return currentNode;
      } 
      return null;
    }
}
const newDLL = new DoublyLinkedList();
newDLL.push("A");
console.log(newDLL);
console.log(newDLL.set(-1, "too low"));
console.log(newDLL.set(0, "updated A"));
console.log(newDLL.set(1, "too high"));
console.log(newDLL);