/**
  Rotate array on n elements to the right by k
  e.g. n=7, k=3: [1,2,3,4,5,6,7] ==> [5,6,7,1,2,3,4]
*/

var rotate=function rotate(arr, k) {
    'use strict';
    if (arr===null || k<0) {
       return -1;
    }
    for (var i = 0; i < k; i++) {
        for (var j = arr.length - 1; j > 0; j--) {
            var temp = arr[j];
	    arr[j] = arr[j - 1];
	    arr[j - 1] = temp;
	}
    }
    return arr;
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([1,2,3,4,5,6,7], 6));
