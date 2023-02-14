// Name: Omkar Lohar
// Roll No. : 2201112

// 2. Write a program to demonstrate doubly linked list with following operations
// Create, Insert, Delete, Display

class LinkedList {
  constructor() {
    this.list = null;
  }

  create(element) {
    var node = new newNode(element);
    if (!this.list) {
      this.list = node;
    } else {
      var temp = this.list;
      while (temp.next != null) temp = temp.next;
      temp.next = node;
      node.prev = temp;
    }
  }
  del(element) {
    var temp = this.list;
    while (temp.data != element && temp.next != null) {
      temp = temp.next;
    }
    if (temp.data == element) {
      if (temp.prev == null) {
        this.list = this.list.next;
        if (this.list != null) this.list.prev = null;
      } else {
        if (temp.next != null) {
          //not last node
          temp.next.prev = temp.prev;
        }
        temp.prev.next = temp.next;
      }
      temp = null;
    } else console.log("Element not present");
  }
  display() {
    var temp = this.list;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
class newNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

const list = new LinkedList();
list.create(45);
list.create(56);
list.create(39);
list.create(60);
list.create(89);
console.log("After Create.");
list.display();
list.del(56);
list.del(30);
console.log("After Delete.");
list.display();
