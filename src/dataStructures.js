/**
   Collection of various data structures
*/

class List {

    constructor() {
        this.memory=[];
        this.length=0;
    }

    /** 
        Get data from list
    */
    get(address) {
        return this.memory[address];
    }

    /**
       Add items at the end of the list
    */
    push(value) {
        this.memory[this.length]=value;
        this.length++;
    }

    /**
       Pop items from the end of the list
    */
    pop() {
        if (this.length===0) {
            return;
        }
        var lastAddress=this.length-1;
        var value=this.memory[lastAddress];
        delete this.memory[lastAddress];
        this.length--;
        return value;
    }

}


module.exports = {
  List
};
