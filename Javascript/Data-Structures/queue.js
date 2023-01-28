class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.length = 0;
      this.start = null;
      this.end = null;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.start = newNode;
        this.end = newNode;
      } 
      else {
        this.end.next = newNode;
        this.end = newNode;
      }
      this.length += 1;
      return newNode;
    }
    dequeue() {
      if (!this.length) return null;
      else {
        const nodeToRemove = this.start;
        this.start = this.start.next;
        nodeToRemove.next = null;
        if (this.length === 1) this.end = null;
        this.length -= 1;
        return nodeToRemove;
      }
    }
}