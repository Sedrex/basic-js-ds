const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} _l
 * @param {Number} _k
 * @return {List}
 *
 * @example;
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

//  class ListNode {
//   constructor(x, next = null) {
//     this.data = x;
//     this.next = next;
//   }
// // }
// class linkedList{
//   constructuor(){
//     this.head=null;
//     this.tail=null;
//   }
// }
  //  class ListNode {
  //    constructor(x) {
  //      this.value = x;
  //      this.next = null;
  //    }
  //  }
  
// }
  // append(data){
  //   const node = new ListNode(data);
  //   if(this.tail){
  //     this.tail.next = node;
  //   }
  //   if(!this.head){
  //     this.head = node;
  //   }
  //   this.tail = node;
  // }

//   prepand(data){
//     const node = new ListNode(data, this.head);
//     this.head = node;
//     if(!this.tail) {
//       this.tail = node;
//     }
//   }
//   insertAfter(after, data){
//     const found = this.find(after);
//     if (!found){
//       return
//     }
//     found.next = new ListNode(data, found.next)
//   }
  // remove(k){
  //   if(!this.head){
  //     return
  //   }

  //   while(this.head && this.head.data === k){
  //     this.head = this.head.next;
  //   }

  //   let current = this.head;
  //   while(current.next){
  //     if(current.next.data === k){
  //       current.next = current.next.next;
  //     } else {
  //       current = current.next;
  //     }
  //   }
  //   if(this.tail.data === k){
  //     this.tail = current;
  //   }
  // }
//   find(data){
//     if(!this.head){
//       return 
//     }
//     let current = this.head;
//     while(current){
      
//       if(current.data === data){
//         return current;
//       }
//       current = current.next;
//     }
//   }
  // toArray(){
  //   const output = [];
  //   while(current){
  //     output.push(current);
  //     current = current.next;
  //   }
  //   return output;
  // }
// }
// class removeKFromList{
//   remove(k);
// // }
//  l = new linkedList;

function removeKFromList(  l,k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
    // if(!this.head){
    //   return
    // }

    // while(this.head && this.head.data === k){
    //   this.head = this.head.next;
    // }

    // let current = this.head;
    // while(current.next){
    //   if(current.next.data === k){
    //     current.next = current.next.next;
    //   } else {
    //     current = current.next;
    //   }
    // }
    // if(this.tail.data === k){
    //   this.tail = current;
    // }
    // return l;


  // class ListNode {
  //   constructor(x) {
  //     this.data = x;
  //     this.next = next;
  //   }
  // }
  // class linkedList{
  //   constructuor(){
  //     this.head=null;
  //     this.tail=null;
  //   }
    // append(data){
    //   const node = new ListNode(data);
    //   if(this.tail){
    //     this.tail.next = node;
    //   }
    //   if(!this.head){
    //     this.head = node;
    //   }
    //   this.tail = node;
    // }
    // 
    // insertAfter(after, data){
    //   const found = this.find(after);
    //   if (!found){
    //     return
    //   }s
    //   found.next = new ListNode(data, found.next)
    // }
    //   const output = [];
    //   let current = this.head;
    //   while(current){
    //     output.push(current);
    //     current = current.next;
    //   }
    //   for(i=0; i<output.length; i++){
    //     if (k === output[i]){
    //       delete output[i]
    //     }
      
    //   function convertArrayToList(arr) {
    //     return arr.reverse().reduce((acc, cur) => {
    //       if (acc) {
    //         const node = new ListNode(cur);
    //         node.next = acc;
    //         return node;
    //       }

    //       return new ListNode(cur);
    //     }, null);
    //   }
    //   return convertArrayToList(output);
    // }
    let head = l
    let previous = null
  
    while(l){
      if(l.value === k){            
        if(previous===null){
            head = l = l.next
            continue
        } else {
            previous.next = l.next
            l = l.next
            continue
        }
      }
      previous = l
      l = l.next
    }
    return head
}
module.exports = {
  removeKFromList
}