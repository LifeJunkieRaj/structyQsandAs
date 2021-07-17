// Implement a counting function in a Linked List
function countNodes(Nodehead) {
    //assuming head !== null
    let count = 1
    Node.current = head
    while (current.next != null) {
        current = current.next;
        count += 1;
    }
    return count;
}

// Implement a List Node
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Implement a Linked List
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

