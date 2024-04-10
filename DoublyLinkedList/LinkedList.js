class DoublyListNode {
  constructor(data) {
      this.data = data; // The data held by the node
      this.next = null; // Pointer to the next node in the list
      this.prev = null; // Pointer to the previous node in the list
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null; // First node of the list
      this.tail = null; // Last node of the list
  }

  // Add a node to the end of the list
  addLast(data) {
      const newNode = new DoublyListNode(data);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }

  // Remove a node from the end of the list
  removeLast() {
      if (!this.tail) {
          return; // List is empty
      }
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
      }
  }

  // Print the list from head to tail
  printForward() {
      let current = this.head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }

  // Print the list from tail to head
  printBackward() {
      let current = this.tail;
      while (current) {
          console.log(current.data);
          current = current.prev;
      }
  }
}

module.exports = DoublyLinkedList;

/*

Advantages of Doubly Linked Lists
Bidirectional Traversal: Easily traverse the list in both directions, which is particularly useful for certain algorithms and operations.
Efficient Insertions and Deletions: Inserting and deleting nodes are more efficient in some scenarios, especially when removing nodes from the end of the list or when the node to be deleted is directly available (since you don't need to traverse from the head to find the previous node).
Reverse Traversing: The ability to traverse from tail to head can simplify some tasks and algorithms.

Disadvantages of Doubly Linked Lists
Extra Memory: Each node requires extra memory for the additional prev pointer.
Complexity: Operations involve updating more pointers (both next and prev), which can make the code more complex and error-prone.


Is good for:
Navigation between pages in an eBook reader.
Playlist management in music apps.
Recently used files in software applications.

*/