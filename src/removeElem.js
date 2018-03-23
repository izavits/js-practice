/**
  Given an array and a value, remove all instances of that value in place and return the new length.
*/

var removeElem=function removeElem(nums, elem) {
    var i=0;
    var j=0;
    while (j<nums.length) {
          if (nums[j]!==elem) {
             nums[i]=nums[j];
             i++;
          }
          j++;
    }
    //console.log(nums);
    return i;
};

console.log(removeElem([2,3,1,4,5,7,8,4,9,4],4));
