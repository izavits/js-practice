/**
  Find the k-th largest element in unsorted array
  O(nlog(n))
*/

var klarge=function klarge(nums, k) {
    nums.sort();
    return nums[nums.length-k];
};

console.log(klarge([3,2,1,5,6,4], 2));
