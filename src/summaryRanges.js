/**
  Given a sorted integer array without duplicates, return the summary of its ranges for consecutive numbers.

  For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

var summaryRanges=function summaryRanges(nums) {
    var result=[];
    if (nums===null || nums.length===0) {
       return result;
    }
    if (nums.length===1) {
       result.push(nums[0]+"");
    }

    var pre=nums[0];  // previous element
    var first=pre;    // first element of each range
    for (var i=1; i<nums.length; i++) {
        if (nums[i]===pre+1) {
           if (i===nums.length-1) {
              result.push(first+"->"+nums[i]);
           }
        }
        else {
             if (first===pre) {
                result.push(first+"");
             }
             else {
                  result.push(first+"->"+pre);
             }
             if (i===nums.length-1) {
                result.push(nums[i]+"");
             }
             first=nums[i];
        }
        pre=nums[i];
    }
    return result;
};

console.log(summaryRanges([0,1,2,4,5,7]));
