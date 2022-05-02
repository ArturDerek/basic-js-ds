const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node');
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
class Queue {
  constructor() {
    this.node = null;
  }

  getUnderlyingList() {
    return this.node
  }

  enqueue(value) {
    if (!this.node) {
      this.node = new ListNode(value)
    } else {
      let nextObj = this.node.next ? this.node.next : this.node

      while (nextObj.next) {
        nextObj = nextObj.next
      }

      nextObj.next = new ListNode(value)
    }
  }

  dequeue() {
    const topValue = this.node.value
    this.node = this.node.next

    return topValue
  }
}


const classQueue = new Queue();
console.log('empty queue', classQueue.getUnderlyingList());

module.exports = {
  Queue
};
