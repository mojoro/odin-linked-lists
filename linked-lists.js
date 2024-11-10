class LinkedList {
  constructor() {
    this.headNode = new Node();
  }

  append(value) {
    if (!this.headNode.value) {
      this.headNode.setValue(value);
    } else {
      const lastNode = this.nextUntilNull(this.headNode);
      lastNode.setNext(new Node());
      lastNode.nextNode.setValue(value);
    }
  }

  // recursive function to find the last node of the list.
  nextUntilNull(node) {
    if (!node.nextNode || !node.nextNode.value) {
      return node;
    } else {
      return this.nextUntilNull(node.nextNode);
    }
  }

  prepend(value) {
    const newHead = new Node();
    newHead.setValue(value);
    newHead.setNext(this.headNode);
    this.headNode = newHead;
  }

  size(node = this.headNode, count = 0) {
    if (!node.nextNode || !node.nextNode.value) {
      return ++count;
    } else {
      return this.size(node.nextNode, ++count);
    }
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    return this.nextUntilNull(this.headNode).value;
  }

  at(index, node = this.headNode) {
    if (index == 0) {
      return node.value;
    } else if (node.nextNode) {
      return this.at(index - 1, node.nextNode);
    } else if (!node.nextNode || !node.nextNode.value) {
      return "Index out of range";
    }
  }

  pop(node = this.headNode, prevNode = "") {
    if (!node.nextNode || !node.nextNode.value) {
      prevNode.setNext(null);
    } else {
      return this.pop(node.nextNode, node);
    }
  }

  contains(value, node = this.headNode) {
    if (node.value == value) {
      return true;
    } else if (node.nextNode) {
      return this.contains(value, node.nextNode);
    }
    return false;
  }

  find(value, node = this.headNode, index = 0) {
    if (node.value == value) {
      return index;
    } else if (node.nextNode) {
      return this.find(value, node.nextNode, index + 1);
    }
    return "Not found";
  }

  toString(node = this.headNode, string = "") {
    if (!node.nextNode || !node.nextNode.value) {
      string += `( ${node.value} ) -> null`;
      return string;
    } else if (node) {
      string += `( ${node.value} ) -> `;
      return this.toString(node.nextNode, string);
    }
  }

  insertAt(value, index, node = this.headNode) {
    if (index == 0) {
      this.prepend(value);
    } else if (index == 1 && node.nextNode) {
      const newNode = new Node();
      newNode.setValue(value);
      newNode.setNext(node.nextNode);
      node.setNext(newNode);
    } else if (node.nextNode) {
      return this.insertAt(value, index - 1, node.nextNode);
    } else if (!node.nextNode || !node.nextNode.value) {
      this.append(value);
    }
  }

  removeAt(index, node = this.headNode, prevNode = "") {
    if (index == 0) {
      prevNode.setNext(node.nextNode);
    } else if (node.nextNode) {
      return this.removeAt(index - 1, node.nextNode, node);
    } else if (!node.nextNode || !node.nextNode.value) {
      this.pop();
    }
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }

  setValue(value) {
    this.value = value;
  }

  setNext(nextNode) {
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("ferret");

console.log("To String: " + list.toString());
console.log("Size: " + list.size());
console.log("head: " + list.head());
console.log("Tail: " + list.tail());
console.log("At 4: " + list.at(4));
list.pop();
console.log("Popped: " + list.toString());
console.log("Contains 'turtle': " + list.contains("turtle"));
console.log("Contains 'snake': " + list.contains("snake"));
console.log("Contains 'gary': " + list.contains("gary"));
console.log("Find 'dog': " + list.find("dog"));
console.log("Find 'gary': " + list.find("gary"));
list.insertAt("goldfish", 7);
console.log("Insert 'goldfish' at 7: " + list.toString());
list.removeAt(4);
console.log("Delete 4: " + list.toString());
