import { LinkedList } from "./linked-lists.js";

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
