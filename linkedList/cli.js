const readline = require('readline');
const LinkedList = require('./LinkedList'); // Make sure to export your LinkedList class from LinkedList.js

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const list = new LinkedList();

console.log(`LinkedList CLI
Commands:
addFirst [value] - Add a value at the beginning
addLast [value] - Add a value at the end
delete [value] - Delete a node by value
contains [value] - Returns true if the value exists
insertAt [value] [position] - Insert a value in the specified position
print - Print the linked list
exit - Exit the program`);

rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');

    switch (command) {
        case 'addFirst':
            list.addFirst(args[0]);
            console.log(`Added ${args[0]} at the beginning`);
            break;
        case 'addLast':
            list.addLast(args[0]);
            console.log(`Added ${args[0]} at the end`);
            break;
        case 'delete':
            list.deleteByValue(args[0]);
            console.log(`Deleted node with value ${args[0]}`);
            break;
        case 'print':
            console.log('Current LinkedList:');
            list.printList();
            break;
        case 'exit':
            rl.close();
            break;
        case 'insertAt':
          list.insertAt(args[0], args[1]);
          console.log(`Inserted ${args[0]} at ${args[1]}`);
          break;
        case 'contains':
          console.log(list.contains(args[0]));
        default:
            console.log('Unknown command');
    }
});

rl.on('close', () => {
    console.log('Exiting LinkedList CLI');
    process.exit(0);
});
