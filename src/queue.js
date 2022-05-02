const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
 

class Queue {

  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  getUnderlyingList() {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }

  enqueue(value) {
    let node = new ListNode(value);

  if (!this.first){ // for empty list first and last are the same
    this.first = node;
    this.last = node;
  } else { // otherwise we stick it on the end
    this.last.next=node;
    this.last=node;
  }

  this.size += 1;
  return node;
};


dequeue() {
    if (!this.first) //check for empty list
      return null;
  
    temp = this.first; // grab top of list
    if (this.first==this.last) {
      this.last=null;  // when we need to pop the last one
    }
    this.first = this.first.next; // move top of list down
    this.size -= 1;
    return temp;
  };
  }
module.exports = {
  Queue
};
