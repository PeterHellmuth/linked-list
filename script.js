class linkedList {
  constructor() {
    this.root = null;
    this.tail = null;
  }

  append(value) {
    if (this.root === null) {
      this.root = new node();
      this.tail = this.root;
    } else {
      this.tail.nextNode = new node();
      this.tail = this.tail.nextNode;
    }
  }

  prepend(value) {
    let newNode = new node();
    newNode.nextNode = this.root;
    this.root = newNode;
  }

  size() {
    if (this.root) {
      let returnSize = 1;
      let currentNode = this.root;
      while (currentNode.nextNode != null) {
        returnSize++;
        currentNode = currentNode.nextNode;
      }
      return returnSize;
    } else {
      return 0;
    }
  }
}

class node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

let aLinkedList = new linkedList();

aLinkedList.append(5);
aLinkedList.append(3);
aLinkedList.append(2);
console.log(aLinkedList.size());
