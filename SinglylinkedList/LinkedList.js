class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // Points to the next node in the list
  }
}

// Defines the LinkedList class
class LinkedList {
  constructor() {
      this.head = null; // The head (first node) of the list, initially null indicating the list is empty
  }

  // Adds a new node with the provided data at the beginning of the list
  addFirst(data) {
      let newNode = new ListNode(data); // Creates a new node
      newNode.next = this.head; // The new node points to the current head
      this.head = newNode; // The new node becomes the new head of the list
  }

  // Adds a new node with the provided data at the end of the list
  addLast(data) {
      let newNode = new ListNode(data); // Creates a new node
      if (!this.head) {
          // If the list is empty, the new node becomes the head
          this.head = newNode;
          return;
      }
      let current = this.head; // Start from the head
      while (current.next) {
          // Traverse the list until the last node
          current = current.next;
      }
      current.next = newNode; // The last node points to the new node
  }

  // Prints the entire list to the console
  printList() {
      let current = this.head; // Start from the head
      while (current) {
          console.log(current.data); // Print the data of each node
          current = current.next; // Move to the next node
      }
  }

  // Deletes the first node with the specified value from the list
  deleteByValue(value) {
      if (!this.head) return; // If the list is empty, do nothing

      if (this.head.data === value) {
          // If the head needs to be deleted, make the next node the new head
          this.head = this.head.next;
          return;
      }

      let current = this.head; // Start from the head
      while (current.next && current.next.data !== value) {
          // Traverse the list until finding the node right before the one to delete
          current = current.next;
      }

      if (current.next) {
          // If such a node is found, bypass the node to be deleted
          current.next = current.next.next;
      }
  }

  // Returns true if the list contains a node with the specified value, false otherwise
  contains(value) {
      let current = this.head; // Start from the head
      while (current) {
          if (current.data === value) return true; // If a node with the value is found, return true
          current = current.next; // Move to the next node
      }
      return false; // If no node with the value is found, return false
  }

  // Inserts a new node with the provided data at the specified position in the list
  insertAt(data, position) {
      if (position === 0) {
          // If the position is 0, add the new node at the beginning
          this.addFirst(data);
          return;
      }

      let newNode = new ListNode(data); // Creates a new node
      let current = this.head; // Start from the head
      let index = 0; // Keep track of the current position

      // Traverse the list to find the node right before the insertion position
      while (current && index < position - 1) {
          current = current.next;
          index++;
      }

      if (!current) {
          // If the position is out of bounds, print an error message
          console.log("Position out of bounds");
          return;
      }

      // Insert the new node at the specified position
      newNode.next = current.next; // The new node points to the next node in the original list
      current.next = newNode; // The previous node points to the new node
  }
}

module.exports = LinkedList
// A node from a singly linked list doesn't know about
// the previous node, only the next