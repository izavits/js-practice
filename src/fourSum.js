/**
  Typical k-sum problem:
  Given an array of integers are there elements a,b,c,d such that a+b+c+d=target?
  e.g. Input: {1 0 -1 0 -2 2}, and target = 0
  Output: (-1,  0, 0, 1), (-2, -1, 1, 2), (-2,  0, 0, 2)
*/

var fourSum=function fourSum(nums, target) {
    'use strict';
    nums.sort();
    var solution={};
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            var k=j+1;
            var l=nums.length-1;

            while (k<l) {
                  var sum=nums[i]+nums[j]+nums[k]+nums[l];
                  if (sum>target) {
                    l--;
                  }
                  else if (sum<target) {
                    k++;
                  }
                  else if (sum===target) {
                    solution[[nums[i], nums[j], nums[k], nums[l]]]=[nums[i], nums[j], nums[k], nums[l]];
                    k++;
                    l--;
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

console.log(fourSum([1,0,-1,0,-2,2],0));
