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
//  class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
//  }
//  class linkedList{
//   constructuor(){
//     this.head=null;
//     this.tail=null;
//   }
//     append(data){
//     const node = new ListNode(data);
//     if(this.tail){
//       this.tail.next = node;
//     }
//     if(!this.head){
//       this.head = node;
//     }
//     this.tail = node;
//   }
// }


// class Queue {
  
//   getUnderlyingList() {
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     return new linkedList();
//   }

//   enqueue(data) {
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     // var newNode = new ListNode(x);
//       const node = new ListNode(data);
//       if(this.tail){
//         this.tail.next = node;
//       }
//       if(!this.head){
//         this.head = node;
//       }
//       this.tail = node;
//       return this.tail;
//   }

//   dequeue() {
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here

//   }
// }
// class ListNode {
//   constructor(value) {
//      this.value = value
//      this.next = null 
//    }
//  }

// class Queue {
//   constructor() {
//     this.first = null
//     this.last = null
//     this.size = 0
//   }


//   isEmpty() {
//     return !this.size
//   }

//   enqueue(item) {
//     // Create node
//     const newNode = new ListNode(item)
//     /**
//      * * If our list is empty than both our 
//      * * first item and last item is going to point the new node. 
//      */
//     if (this.isEmpty()) {
//       this.first = newNode
//       this.last = newNode
//     }
//     else {
//       this.last.next = newNode
//       this.last = newNode
//     }
//     this.size++
//     return this.value
//   }
//   /**
//    * 
//    * @returns 
//    */

//   dequeue() {

//     //* if our queue is empty we return null 
//     if (this.isEmpty()) return null
//     const itemToBeRemoved = this.first

//     /**
//      * * if both our first and last node are pointing the same item
//      * * we dequeued our last node. 
//      */
//     if (this.first === this.last) {
//       this.last = null
//     }
//     this.first = this.first.next
//     this.size--
//     return itemToBeRemoved
//   }

//   /**
//    * * Returns the next element to be dequeued. 
//    * @returns 
//    */
//   peek() {
//     return this.first
//   }
// }





// class ListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor(comparator) {
//     this.head = null;
//     this.tail = null;

//     this.comparator =
//       comparator ||
//       function (i, j) {
//         if (i < j) return -1;
//         if (i > j) return 1;
//         return 0;
//       };
//   }

//   prepend(value) {
//     let newNode = new ListNode(value, this.head);
//     this.head = newNode;

//     if (!this.tail) this.tail = newNode;
//   }

//   append(value) {
//     let newNode = new ListNode(value);
//     if (this.tail) this.tail.next = newNode;
//     this.tail = newNode;
//     if (!this.head) this.head = newNode;

//   }

//   delete(value) {
//     if (!this.head) return;
//     while (this.head && this.comparator(this.head.value, value) === 0) {
//       this.head = this.head.next;
//     }

//     let current = this.head;

//     if (current !== null) {
//       while (current.next) {
//         if (this.comparator(current.next.value, value) === 0) {
//           current.next = current.next.next;
//         } else {
//           current = current.next;
//         }
//       }
//     }
//   }
//   deleteHead() {
//     if (!this.head) return null;
//     let deletedHead = this.head;

//     if (this.head.next) {
//       this.head = this.head.next;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }

//     return deletedHead;
//   }
//   forEach(callback) {
//     return this.toArray()
//     // На каждом узле вызываем метод toString
//     // что бы получить значение в виде строки.
//     .map(node => node.toString(callback))
//     // Вызываем метод toString на массиве строк.
//     .toString();
//     // let current = this.head;
//     // while (current) {
//     //   callback(current.value);
//     //   current = current.next;
//     // }
//   }

// }


// class Queue {
//     constructor() {
//       this.linkedList = new LinkedList();
//     }

//     getUnderlyingList() {
//       return JSON.stringify(this.Queue);

//     }

//     enqueue(value) {
//       this.linkedList.append(value);
//     }

//     dequeue() {
//       const removedHead = this.linkedList.deleteHead();
//       return removedHead ? removedHead.value : null;
//     }
//   }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
 };



class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  
  
enqueue(value) {
    let node = new Node(value);
  
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
  
dequeue () {
  let temp;
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

      getUnderlyingList() {
              return JSON.stringify(this);
        
            }


// Add an element to the end of the queue.

}
module.exports = {
  Queue
};
