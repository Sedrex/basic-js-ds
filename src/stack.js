const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

 class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
 };


class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
      this.store = [... args.reverse()];
    }

  push(data) {
   let node = new Node(data);

    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }

  pop() {
    temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }

  peek() {
    if(this.top === null){
      return null;
  }else{
      return this.top.data;
  }
  }
  
}

module.exports = {
  Stack
};
