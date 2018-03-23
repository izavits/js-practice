/**
  Given an array of size n, find the majority element.
  The majority element is the element that appears more than n/2 times.
*/

// Since the majority element always takes more than half a space,
// the middle element is guaranteed to be the majority in a sorted array.

var majorityElem=function majorityElem(nums) {
    'use strict';
    if (nums.length===1) {
       return nums[0];
    }
    nums.sort(function(a,b) {return a-b;});
    return nums[nums.length/2];
};

console.log(majorityElem([4,7,8,4,6,4,3,4,4,7,4,4,4,6]));
