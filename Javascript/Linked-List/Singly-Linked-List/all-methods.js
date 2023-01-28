// https://dev.to/miku86/javascript-data-structures-singly-linked-list-reca-210b
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
    push(value) {
      const newNode = new Node(value);
      if (!this.length) this.head = newNode;
      else this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
    pop() {
      if (!this.length) return null;
      else {
        let nodeToRemove = this.head;
        let secondToLastNode = this.head;
        while (nodeToRemove.next) {
          secondToLastNode = nodeToRemove;
          nodeToRemove = nodeToRemove.next;
        }
        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.length -= 1;
        if (!this.length) {
          this.head = null;
          this.tail = null;
        }
        return nodeToRemove;
      }
    }
    unshift(value) {
      const newNode = new Node(value);
      if (!this.length) this.tail = newNode;
      else newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return newNode;
    }
    shift() {
      if (!this.length) return null;
      else {
        const nodeToRemove = this.head;
        this.head = this.head.next;
        this.length -= 1;
        if (!this.length) {
          this.tail = null;
        }
        return nodeToRemove;
      }
    }
    insert(index, value) {
      if (index < 0 || index > this.length) return null;
      else if (index === 0) return this.unshift(value);
      else if (index === this.length) return this.push(value);
      else {
        const preNewNode = this.get(index - 1);
        const newNode = new Node(value);
        newNode.next = preNewNode.next;
        preNewNode.next = newNode;
        this.length += 1;
        return newNode;
      }
    }
    remove(index) {
      if (index < 0 || index >= this.length) return null;
      else if (index === 0) return this.shift();
      else if (index === this.length - 1) return this.pop();
      else {
        const preNodeToRemove = this.get(index - 1);
        const nodeToRemove = preNodeToRemove.next;
        preNodeToRemove.next = nodeToRemove.next;
        this.length -= 1;
        return nodeToRemove;
      }
    }
}