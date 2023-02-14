// Name: Omkar Lohar
// Roll No. : 2201112

// 5. Write a program to implement Circular Queue using linked list with INSERT, 
// DELETE and DISPLAY operations

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    }
  }

  delete() {
    if (this.isEmpty()) {
      return null;
    } else if (this.head === this.tail) {
      const deletedData = this.head.data;
      this.head = null;
      this.tail = null;
      return deletedData;
    } else {
      const deletedData = this.head.data;
      this.head = this.head.next;
      this.tail.next = this.head;
      return deletedData;
    }
  }

  display() {
    if (this.isEmpty()) {
      return null;
    } else {
      let currentNode = this.head;
      let result = `${currentNode.data}`;
      currentNode = currentNode.next;
      while (currentNode !== this.head) {
        result += ` ${currentNode.data}`;
        currentNode = currentNode.next;
      }
      return result;
    }
  }
}
const queue = new CircularQueue();
queue.insert(1);
queue.insert(2);
queue.insert(3);
console.log(queue.display()); // 1 2 3
queue.delete();
console.log(queue.display()); // 2 3
