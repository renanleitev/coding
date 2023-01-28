// https://dev.to/miku86/javascript-data-structures-stack-pop-remove-the-last-node-lbc
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      this.length = 0;
      this.last = null;
    }
    push(value) {
      const newNode = new Node(value);
      if (!this.length) this.last = newNode;
      else {
        newNode.next = this.last;
        this.last = newNode;
      }
      this.length += 1;
      return newNode;
    }
    pop() {
      if (!this.length) return null;
      else {
        const nodeToRemove = this.last;
        this.last = nodeToRemove.next;
        nodeToRemove.next = null;
        this.length -= 1;
        return nodeToRemove;
      }
    }
}
const newStack = new Stack();
newStack.push("A");
newStack.push("B");
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);