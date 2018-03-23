/**
  Binary search
*/

var bSearch=function bSearch(arr, elem) {
    var minIndex=0;
    var maxIndex=arr.length-1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = arr[currentIndex];

        if (currentElement<elem) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement>elem) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
};

var a=[1,2,3,4,5,6,7,8,9];
console.log(bSearch(a,4));
console.log(bSearch(a,9));
console.log(bSearch(a,1));
console.log(bSearch(a,8));
console.log(bSearch(a,0));
