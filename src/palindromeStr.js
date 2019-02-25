/**
  Check if a string is palindrome
*/

var checkPalindrome=function checkPalindrome(str) {
    'use strict';
    str=str.replace(/\W/g,'').toLowerCase();
    return (str==str.split('').reverse().join(''));
};

console.log(checkPalindrome("car"));
console.log(checkPalindrome("Anna"));
