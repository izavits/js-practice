/**
   Collection of various data structures
*/


/**
 Linked List data structure.
 We use a simple array to represent our memory
*/
class List {

    // Constructor function
    constructor() {
        this.memory=[];
        this.length=0;
    }

    // Get data from the list
    get(address) {
        return this.memory[address];
    }

    // Add item at the end of the list
    push(value) {
        this.memory[this.length]=value;
        this.length++;
    }

    // Pop item from the end of the list
    pop() {
        if (this.length===0) {
            return undefined;
        }
        else {
            var lastAddress=this.length-1;
            var value=this.memory[lastAddress];
            delete this.memory[lastAddress];
            this.length--;
            return value;
        }
    }

    // Store item at the start of the list
    unshift(value) {
        var previous=value;
        for(var address=0; address<this.length; address++) {
            var current=this.memory(address);
            this.memory[address]=previous;
            previous=current;
        }
        // Add the last item in a new position
        this.memory[this.length]=previous;
        this.length++;
    }

    // Shift an item from the start of the list
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        else {
            var value=this.memory[0];
            for (var address=0; address<this.length-1; address++) {
                this.memory[address]=this.memory[address + 1];
            }
            delete this.memory[this.length - 1];
            this.length--;
            return value;
        }
    }

}

/**
 Hash Table data structure.
 We use a simple array to represent our memory.
 In order to store key-value pairs we need a way to take the key
 and turn it into an address. This operation is called "hashing".
 It takes a key and serializes it to a unique number.
 The hashing algorithm needs to limit the size, which means that 
 there are a limited number of addresses for an unlimited number of
 values. The result is that you can end up with collisions: Places 
 where two keys get turned into the same address. (we do not deal with
 this situation in this example)
*/
class HashTable {

    // Constructor function
    constructor() {
        // Use a plain array to represent memory
        this.memory=[];
    }

    // Hashing: take a key and turn it into an address
    hashKey(key) {
        var hash=0;
        for (var i=0; i<key.length; i++) {
            var code=key.charCodeAt(i);
            hash=((hash << 5)-hash) + code | 0;
        }
        return hash;
    }

    // Get values by their keys
    get(key) {
        // turn the key into an address
        var address=this.hashKey(key);
        return this.memory[address];
    }

    // Set key - value pair
    set(key, value) {
        var address=this.hashKey(key);
        this.memory[address]=value;
    }

    // Remove items from the hash table
    remove(key) {
        var address=this.hashKey(key);
        if (this.memory[address]) {
            delete this.memory[address];
        }
    }
}


// Start implementing data structures using other data structures

/**
    Stack data structure.
    Stacks are similar to lists.
*/
class Stack {

    // Constructor function
    constructor() {
        this.list=[];
        this.length=0;
    }

    // Push items to the top of the stack
    push(value) {
        this.length++;
        this.list.push(value);
    }

    // Pop items from the top of the stack
    pop() {
        if (this.length===0) {
            return undefined;
        }
        else {
            this.length--;
            return this.list.pop();
        }
    }

    // View the item at the top of the stack
    // without removing it
    peek() {
        return this.list[this.length-1];
    }
}


/**
   Queue data structure
*/
class Queue {

    // Constructor function
    constructor() {
        this.list=[];
        this.length=0;
    }

    // Add items to queue.
    // This function will push items at the end of the list
    enqueue(value) {
        this.length++;
        this.list.push(value);
    }

    // Remove item from the queue. This will remove the item
    // from the start of the list
    dequeue() {
        if (this.length===0) {
            return undefined;
        }
        else {
            this.length--;
            return this.list.shift();
        }
    }

    // View the item at the start of the queue
    // without removing it
    peek() {
        return this.list[0];
    }
}


/**
    Graph data structure.
*/
class Graph {

    // Constructor function
    constructor() {
        // We will hold all nodes in a js array
        this.nodes=[];
    }

    // Add a node to the graph with a given value
    // but without a line at this moment
    addNode(value) {
        return this.nodes.push({
            value,
            lines:[]
        });
    }

    // Look up nodes
    find(value) {
        return this.nodes.find(node => {
            return node.value===value;
        });
    }

    // Add line between nodes
    addLine(start, end) {
        // Find the starting and ending nodes
        var startNode=this.find(start);
        var endNode=this.find(end);
        if (!startNode || !endNode) {
            throw new Error('Both nodes need to exist!');
        }
        // Add a reference to the endNode from the startNode
        startNode.lines.push(endNode);
    }
}


/**
   Linked list data structure
*/
class LinkedList {

    // Constructor function
    constructor() {
        this.head=null;
        this.length=0;
    }

    // Get value in given position
    get(position) {
        if (position>=this.length) {
            throw new Error('Position out of range');
        }
        var current=this.head;
        // Slide through the nodes until we reach the given position
        for (var i=0; i<position; i++) {
            current=current.next;
        }
        return current;
    }

    // Add nodes to the list at the specified position
    add(value, position) {
        // Create node to hold the given value
        var node={
            value,
            next:null
        };
        if (position===0) {
            // Insert node at the head
            node.next=this.head;
            this.head=node;
        } else {
            // Given the position, find previous and current node
            // and insert the new node in between
            var previous=this.get(position-1);
            var current=previous.next;
            node.next=current;
            previous.next=node;
        }
        this.length++;
    }

    // Remove node from a given position
    remove(position) {
        if (!this.head) {
            throw new Error('Cannot remove from empty list');
        }
        if (position===0) {
            this.head=this.head.next;
        } else {
            var previous=this.get(position-1);
            previous.next=previous.next.next;
        }
        this.length--;
    }
    
}


module.exports = {
    List,
    HashTable,
    Stack,
    Queue,
    Graph,
    LinkedList
};
