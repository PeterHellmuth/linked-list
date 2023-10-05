class linkedList {
  constructor() {
    this.root = null;
    this.tail = null;
  }

  append(value) {
    if (this.root === null) {
      this.root = new node(value);
      this.tail = this.root;
    } else {
      this.tail.nextNode = new node(value);
      this.tail = this.tail.nextNode;
    }
  }

  prepend(value) {
    this.root = new node(value, this.root);
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

  head() {
    return this.root;
  }

  rail() {
    return this.tail;
  }

  at(index) {
    if (this.root) {
      let currentIndex = 0;
      let currentNode = this.root;
      while (currentNode.nextNode != null) {
        if (currentIndex == index) {
          return currentNode;
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
      if (currentIndex == index) {
        return currentNode;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  pop() {
    if (this.root) {
      let currentNode = this.root;
      let lastNode = this.root;
      while (currentNode.nextNode != null) {
        lastNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      if (currentNode.nextNode == null) {
        lastNode.nextNode = null;
        return currentNode;
      }
    } else {
      return null;
    }
  }
  contains(value) {
    if (this.root) {
      let currentNode = this.root;
      while (currentNode.nextNode != null) {
        if (currentNode.value == value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      if (currentNode.value == value) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  find(value) {
    if (this.root) {
      let currentIndex = 0;
      let currentNode = this.root;
      while (currentNode.nextNode != null) {
        if (currentNode.value == value) {
          return currentIndex;
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
      if (currentNode.value == value) {
        return currentIndex;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  toString() {
    if (this.root) {
      let currentNode = this.root;
      let returnString = `(${currentNode.value}) -> `;
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
        returnString += `(${currentNode.value}) -> `;
      }
      returnString += `null`;
      return returnString;
    } else {
      return "null";
    }
  }
}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let aLinkedList = new linkedList();

aLinkedList.append(5);
aLinkedList.append(3);
aLinkedList.append(2);
aLinkedList.append(7);
aLinkedList.prepend(9);
console.log(aLinkedList.toString());
//console.log(aLinkedList.at(0));
