/**
   Collection of various data structures
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


module.exports = {
  List
};
