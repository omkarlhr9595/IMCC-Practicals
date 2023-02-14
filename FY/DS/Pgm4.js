// Name: Omkar Lohar
// Roll No. : 2201112

// 4. Write a program to implement Linear Queue using linked list with INSERT, 
// DELETE and DISPLAY operations

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (this.rear === null) {
      this.front = this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let temp = this.front;
    this.front = temp.next;
    if (this.front === null) {
      this.rear = null;
    }
    return temp.data;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let temp = this.front;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log("Deleted element is:", q.dequeue());
console.log("Deleted element is:", q.dequeue());
q.display();
//Deleted element is: 1
//Deleted element is: 2
//3
