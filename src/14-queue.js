const ListNode1 = require('../extensions/list-node');

ListNode1(5);

function ListNode(x) {
  this.value = x;
  this.next = null;
}
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.value = new ListNode();
  }

  get size() {
    let val = this.value;
    const arr2 = [val];
    while (val.next) {
      val = val.next;
      arr2.push(val);
    }
    return arr2.length;
  }

  enqueue(element) {
    if (typeof this.value.value === 'undefined') {
      this.value.value = element;
    } else {
      let val = this.value;
      const arr2 = [val];
      while (val.next) {
        val = val.next;
        arr2.push(val);
      }
      arr2.push(new ListNode(element));
      let i = arr2.length;
      while (i > 1) {
        arr2[i - 2].next = arr2[i - 1];
        i--;
      }
      [this.value] = [arr2[0]];
    }
  }

  dequeue() {
    const arr2 = [this.value];
    if (this.value.next) {
      arr2.push(this.value.next);
    }
    [this.value] = [arr2[1]];
    return arr2[0].value;
  }
}

module.exports = Queue;
