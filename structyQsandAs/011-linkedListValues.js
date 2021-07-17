// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative Approach

const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values
}

// Recursive Approach
const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
};

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}

// n = number of nodes
// Time: O(n) 
// Space: O(n)