/**
  Given an array of integers, find two numbers that they add up to a specific target
  i.e. Input [2,7,11,15], target=9
  Output: index1=1, index2=2
*/

var twoSum=function twoSum(nums, target) {
    'use strict';
    var map={};
    var index1;
    var index2;
    for (var i=0; i<nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
           var index=map[nums[i]];
           index1=index+1;
           index2=i+1;
           break;
        }
        else {
             map[target-nums[i]]=i;
        }
    }
    var res=[index1, index2];
    return res;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([1,5,8,10,11], 19));
