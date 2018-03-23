/**
  The count-and-say sequence is the sequence of integers beginning as follows:
  1, 11, 21, 1211, 111221, ...
  Given an integer n, generate the nth sequence.
*/

var countSay=function countSay(n) {
    if (n<=0) {
       return null;
    }
    var result="1";
    var i=1;
    while (i<n) {
          var sb="";
          var count=1;
          for (var j=1; j<result.length; j++) {
              if (result[j]===result[j-1]) {
                 count++;
              }
              else {
                   sb=sb.concat(count);
                   sb=sb.concat(result[j-1]);
                   count=1;
              }
          }
          sb=sb.concat(count);
          sb=sb.concat(result[result.length-1]);
          result=sb;
          i++;
    }
    return result;
};

console.log(countSay(3));
console.log(countSay(4));
console.log(countSay(5));
console.log(countSay(10));
