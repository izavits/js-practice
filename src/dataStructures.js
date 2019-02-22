**
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
            return;
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
            return;
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
            return;
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


module.exports = {
    List,
    HashTable,
    Stack
};
