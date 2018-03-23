/**
  Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
  find the area of largest rectangle in the histogram.
  For example, given height = [2,1,5,6,2,3], return 10.
*/

var largestRectangle=function largestRectangle(height) {
    'use strict';
    if (height===null || height.length===0) {
       return 0;
    }

    var stack=[];
    var max=0;
    var i=0;

    while (i<height.length) {
          // push index to stack if current height is larger than previous
          if (stack.length===0) {
             stack.push(i);
             i++;
          }
          else if (height[i]>=height[stack[stack.length-1]]) {
               stack.push(i);
               i++;
          }
          else {
               // calculate max value when the current height is less than the previous one
               var elem=stack.pop();
               var h=height[elem];
               var w;
               if (stack.length===0) {
                  w=i;
               }
               else {
                  w=i-stack[stack.length-1]-1;
               }
               max=Math.max(h*w,max);
          }
    }

    while (stack.length!==0) {
          var elem=stack.pop();
          var h=height[elem];
          var w;
          if (stack.length===0) {
                  w=i;
           }
           else {
              w=i-stack[stack.length-1]-1;
           }
           max=Math.max(h*w,max);
    }
    return max;
};



var largestRect2=function largestRect2(height){
    var max=0;
    if (height===null || height.length===0) {
       return 0;
    }
    var i=0;
    while (i<height.length) {
          var h=height[i];
          max=Math.max(h*1, max);
          var j=i-1;
          while (j>=0) {
             if (height[j]<h) {
                h=height[j];
                max = Math.max(height[j] * (i - j + 1), max);
             }
             else {
                  max = Math.max(h * (i - j + 1), max);
             }
             j--;
          }
          i++;
    }
    return max;
};

console.log(largestRect2([2,1,5,6,2,3]));
console.log(largestRect2([2,3,10,11,7]));
