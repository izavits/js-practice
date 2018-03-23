/**
  Breath first search
  start="hit"
  end="cog"
  dict=["hot","dot","dog","lot","log"]
*/

// First override the String prototype to create the replaceAt function, since
// strings are immutable and cannot replace letters
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

// Define a "struct" for word nodes
var wordNode=function wordNode(word, numSteps) {
    this.word=word;
    this.numSteps=numSteps;
};

// Solution function
var bfsSolution=function bfsSolution(beginWord, endWord, wordDict) {
    var queue=[];
    queue.push(new wordNode(beginWord, 1));
    wordDict.push(endWord);

    while(queue.length!==0) {
        var top=queue.shift(1);
        var word=top.word;
        if (word===endWord) {
            return top.numSteps;
        }
        for (var i=0; i<word.length; i++) {
            // letter codes from 'a' to 'z'
            for (var c=97; c<=122; c++) {
                var temp=word[i];
                var letter=String.fromCharCode(c);
                if (word[i]!==letter) {
                    word=word.replaceAt(i, letter);
                }
                var newWord=word;
                var index=wordDict.indexOf(newWord);
                if (index!==-1) {
                    queue.push(new wordNode(newWord, top.numSteps+1));
                    wordDict.splice(index,1);
                }
                word=word.replaceAt(i, temp);
            }
        }
    }
    return 0;
};

console.log(bfsSolution("hit", "cog", ["hot","dot","dog","lot","log"]));
