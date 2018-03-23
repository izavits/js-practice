// Fibonacci with memoization

var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( ));

console.log(fibonacci(8));


// Generalize it with a memoizer function

var memoizer=function memoizer(memo, formula) {
    var recur=function(n) {
        var result=memo[n];
        if (typeof result!=='number') {
           result=formula(recur, n);
           memo[n]=result;
        }
        return result;
    };
    return recur;
};

var fib2=memoizer([0,1], function(recur, n) {
    return recur(n-1)+recur(n-2);
});

console.log(fib2(8));

// Now that we have a memoizer function we can also implement factorial

var factorial=memoizer([1,1], function(recur, n) {
    return n*recur(n-1);
});

console.log(factorial(4));
