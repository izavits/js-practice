/**
  Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

  For "(()", the longest valid parentheses substring is "()", which has length = 2.
  Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

var longestValid=function longestValid(s) {
    'use strict';
    var stack=[];
    var result=0;

    for (var i=0; i<=s.length-1; i++) {
        if (s[i]=='(') {
           var a=[i,0];
           stack.push(a);
        }
        else {
             if (stack.length===0 || stack[stack.length-1][1]===1) {
                var a=[i,1];
                stack.push(a);
             }
             else {
                stack.pop();
                var currentLen=0;
                if (stack.length===0) {
                   currentLen=i+1;
                }
                else {
                     currentLen=i-stack[stack.length-1][0];
                }
                result=Math.max(result, currentLen);
             }
        }
    }
    return result;
};

console.log(longestValid("(()"));
console.log(longestValid(")()())"));
