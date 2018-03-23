/**
  Merge all overlapping intervals
  e.g. [1,3], [2,6], [8,10], [15,18] ==> [1,6], [8,10], [15,18]
  Optional arg: new intersecting interval
*/

var comparator=function comparator(a,b) {
    if (a[0]<b[0]) {
        return -1;
    }
    else if (a[0]>b[0]) {
        return 1;
    }
    return 0;
};

var mergeIntervals=function mergeIntervals(intervals, intersect) {
    var intervals=intervals;
    if (intersect) {
        intervals.push(intersect);
    }
    // sort intervals first
    intervals=intervals.sort(comparator);
    var stack=[];
    for (var i=0; i<intervals.length; i++) {
        var currentInterval=intervals[i];
        if (stack.length===0) {
            stack.push(currentInterval);
        }
        else {
            var previousInterval=stack.pop();
            if (currentInterval[0]<=previousInterval[1] && currentInterval[1]>=previousInterval[1]) {
                var merged=[previousInterval[0], currentInterval[1]];
                stack.push(merged);
            }
            else if (currentInterval[0]<=previousInterval[1] && currentInterval[1]<previousInterval[1]) {
                var merged=previousInterval;
                stack.push(merged);
            }
            else {
                stack.push(previousInterval);
                stack.push(currentInterval);
            }
        }
    }
    return stack;
};

console.log(mergeIntervals([[1,5], [2,4], [8,10], [15,18]]));
console.log(mergeIntervals([[2,4], [3,5], [8,10], [15,18]])); // the last two test should have
console.log(mergeIntervals([[3,5], [2,4], [8,10], [15,16]])); // the same result
console.log(mergeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9]));
