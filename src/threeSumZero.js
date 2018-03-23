/**
  Given an array of integers, are there three elements a,b,c such that a+b+c=0?
  e.g [-1, 0, 1, 2, -1, -4]
  a solution is [-1, 0, 1], [-1, -1, 2]
*/

var threeSumZero=function threeSumZero(nums) {
    'use strict';
    nums.sort();
    var solution={};
    for (var i=0; i<nums.length; i++) {
        if (nums[i]>0) {
           break;
        }
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i]+nums[j]>0 && nums[j]>0) {
               break;
            }
            for (var k=j+1; k<nums.length; k++) {
                if (nums[i]+nums[j]+nums[k]===0) {
                  solution[[nums[i], nums[j], nums[k]]]=[nums[i], nums[j], nums[k]];

                }
            }
        }
    }
    var res=[];
    for (var i in solution) {
        res.push(solution[i]);
    }
    return res;
};

console.log(threeSumZero([-1, 0, 1, 2, -1, -4]));
