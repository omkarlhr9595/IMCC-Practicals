// Name: Omkar Lohar
// Roll No. : 2201112

//1. Write a program to demonstrate singly linked list with following operations Create, Insert, Delete, Display, Reverse

class LinkedList {
  constructor() {
    this.list = null;
  }

  create(element) {
    if (!this.list) {
      this.list = new newNode(element);
    } else {
      let temp = this.list;
      while (temp.next != null)
        //finding address of last node
        temp = temp.next;
      temp.next = new newNode(element); //append newnode to list
    }
  }
  insert(element, pos) {
    var node = new newNode(element);
    if (pos == 1) {
      node.next = this.list;
      this.list = node;
    } else {
      var temp = this.list;
      var i = 2;
      while (i != pos && temp.next != null) {
        //finding position
        temp = temp.next;
        i = i + 1;
      }
      node.next = temp.next;
      temp.next = node;
    }
  }

  del(element) {
    let temp = this.list;
    let prev = null;

    while (temp.data != element && temp.next != null) {
      //finding node to be deleted
      prev = temp;
      temp = temp.next;
    }
    if (temp.data == element) {
      if (temp != null) {
        if (prev != null)
          //It's not first node
          prev.next = temp.next;
      } else this.list = this.list.next; //First node
      temp = null;
    } else console.log("Element not present.");
  }
  reverse() {
    var forward = this.list;
    var curr = null;
    var back = null;
    while (forward) {
      back = curr;
      curr = forward;
      forward = forward.next;
      curr.next = back;
    }
    this.list = curr;
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
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

const list = new LinkedList();
list.create(1);
list.create(2);
list.create(3);
console.log("List Created.");
list.display();
list.insert(10);
list.insert(30);
list.insert(40);
console.log("Insert:");
list.display();
console.log("Delete:");
list.del(10);
list.del(3);
list.display();
list.reverse();
console.log("Reverse:");
list.display();
