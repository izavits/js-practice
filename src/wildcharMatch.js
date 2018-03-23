/**
  Implement wildchar pattern matching with support for ? and *
*/

var wildcharMatch=function wildcharMatch(s, p) {
    'use strict';
    var i=0;
    var j=0;
    var starIndex=-1;
    var iIndex=-1;

    while(i<s.length) {
        if (j<p.length && (p.charAt(j)==='?' || p.charAt(j)===s.charAt(i))) {
           ++i;
           ++j;
        }
        else if (j < p.length && p.charAt(j) == '*') {
           starIndex=j;
           iIndex=i;
           j++;
        }
        else if (starIndex!==-1) {
           j=starIndex+1;
           i=iIndex+1;
           iIndex++;
        }
        else {
           return false;
        }
    }
    while (j < p.length && p.charAt(j) == '*') {
          ++j;
    }
    return j===p.length;
};

console.log(wildcharMatch("aab", "*b"));
console.log(wildcharMatch("abc", "*b"));
