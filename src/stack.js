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
    this.next = null;
  }
 };


class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }
  push(data) {

    var node = new Node(data);

       node.next = this.top;
        this.top = node;

        this.count++;
  }

  pop() {
    if(this.top === null){
      return null;
  }else{
      var out = this.top;
      this.top = this.top.next;
      if(this.count>0){
          this.count--;
      }

      return out.data;
  }
    }

  peek() {
    // throw new NotImplementedError('Not implemented');
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

module.exports = {
  Stack
};
