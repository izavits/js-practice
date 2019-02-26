/**
    Various recursion examples
*/

// Calculate factorial of a number
function factorial(x) {
    if (x===0) {
        return 1;
    }
    return x*factorial(x-1);
}
console.log(factorial(5));


// Find greater common divisor of two positive numbers
function grComDivisor(a, b) {
    if (!b) {
        return a;
    }
    return grComDivisor(b, a%b);
}
console.log(grComDivisor(10,15));


// Get the integers between a given range
function range(start, end) {
    if (end-start===2) {
        return [start+1];
    } else {
        var list=range(start, end-1);
        list.push(end-1);
        return list;
    }
}
console.log(range(2,9));


// Compute the exponent of a number
function exponent(a, n) {
    if (n===0) {
        return 1;
    } else {
        return a* exponent(a, n-1);
    }
}
console.log(exponent(4,2));

// Check if number is even
function isEven(num) {
    if (num<0) {
        num=Math.abs(num);
    }
    if (num===0) {
        return true;
    }
    if (num===1) {
        return false;
    }
    else {
        num=num-2;
        return isEven(num);
    }
}
console.log(isEven(378));
console.log(isEven(-79));
console.log(isEven(-12));
