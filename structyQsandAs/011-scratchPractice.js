// linkedListValues:
// I am given a Linked List with a head and a tail.  I need to traverse this Linked List from Head to Tail and add each node on the Linked List
// to an array.  I then need to return the array of nodes. I can have empty Linked List which returns an empty array.next =

// Input: 
// Sample input = // a -> b -> c -> d 
// Sample output = [a, b, c, d]

// 
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const linkedListValues = (head, result = []) => {
    if (head === null) {
        return result
    } 
    result.push(head.val)
    return linkedListValues(head.next, result)
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

