// Name: Omkar Lohar
// Roll No. : 2201112

// 7. Write a program to Reverse a string using stack

class Stack {
  constructor() {
    this.top = null;
  }
  push(ele) {
    var node = new newNode(ele);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    var temp = this.top;
    var char = temp.data;
    this.top = this.top.next;
    temp = null;
    return char;
  }
  reverseString(str) {
    var i = 0;
    var reversestr = "";
    while (i != str.length) {
      this.push(str.charAt(i));
      i++;
    }
    var temp = this.top;
    while (temp != null) {
      var char;
      char = this.pop();
      reversestr += char;
      temp = this.top;
    }
    return reversestr;
  }
  display() {
    var temp = this.top;
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

const stack = new Stack();
const string = "Data Structures";
const reverse = stack.reverseString(string);
console.log(
  `The String provided - ${string}\nString in reverse format -${reverse}`
);
