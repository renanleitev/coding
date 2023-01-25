// Cada lista possui vários nós
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
      if (this.length > 0) {
        this.tail.next = newNode;
      } 
      else {
        this.head = newNode;
      }
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }

    pop() {
        // no node in the list, therefore return null
        if (!this.length) {
          return null;
        } 
        else {
          /*
           * find the second to last node (it should become the new tail):
           * - set the current head as currentNode (we always have to start from the List's head node)
           * - set the current head as secondToLastNode (we can't go back a node, therefore we have to save the second to last)
           * - as long as the current node has a next node (so it is not the last node)
           * - then set the current node to the second to last
           * - then set the current node's `next` as the current node
           */
          let currentNode = this.head;
          let secondToLastNode = this.head;
          while (currentNode.next) {
            secondToLastNode = currentNode;
            currentNode = currentNode.next;
          }
          // set the second to last node's `next` to `null` (the second to last should "cut" its connection to the next node)
          secondToLastNode.next = null;
          // set it as `tail`
          this.tail = secondToLastNode;
          // decrease the Singly Linked List's `length` by 1
          this.length -= 1;
          // if the Singly Linked List now is empty, set its `head` and `tail` to `null`
          if (!this.length) {
            this.head = null;
            this.tail = null;
          }
          // return the popped node (found some lines above)
          return currentNode;
        }
    }
}
const newSLL = new SinglyLinkedList();
console.log(newSLL);
/*
 * SinglyLinkedList {
 *   length: 0,
 *   head: null,
 *   tail: null
 * }
 */

newSLL.push("A");
console.log(newSLL);
/*
 * SinglyLinkedList {
 *   length: 1,
 *   head: Node { value: 'A', next: null },
 *   tail: Node { value: 'A', next: null }
 * }
 */

newSLL.push("B");
console.log(newSLL);
/*
 * SinglyLinkedList {
 *   length: 2,
 *   head: Node { value: 'A', next: Node { value: 'B', next: null } },
 *   tail: Node { value: 'B', next: null }
 * }
 */
console.log(newSLL.pop()); // Node { value: 'B', next: null }
console.log(newSLL.pop()); // Node { value: 'A', next: null }
console.log(newSLL.pop()); // null
console.log(newSLL); // SinglyLinkedList { length: 0, head: null, tail: null }