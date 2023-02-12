class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  inserElement(data) {
    let newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const ll = new LinkedList();
ll.inserElement(10);
ll.inserElement(20);
ll.inserElement(30);

ll.display();

console.log(JSON.stringify(ll));
