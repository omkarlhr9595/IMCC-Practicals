// Name: Omkar Lohar
// Roll No. : 2201112

// 10.Write a program to implement binary search tree with its operations.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  inOrderTraversal(node, result) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

const result = [];
bst.inOrderTraversal(bst.root, result);
console.log(result); // [5, 7, 9, 10, 13, 15, 17, 22, 25, 27]

console.log(bst.search(bst.root, 9)); // Node { data: 9, left: null, right: null }
