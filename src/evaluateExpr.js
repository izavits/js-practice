/**
  Evaluate expression
  eg ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
*/

var evaluate=function evaluate(tokens) {
    var res=0;
    var operators="+-*/";
    var stack=[];
    for (var i=0; i<tokens.length; i++) {
        var t=tokens[i];
        if (operators.indexOf(t)===-1) {
           stack.push(t);
           //console.log(stack);
        }
        else {
             var a=parseInt(stack.pop(), 10);
             var b=parseInt(stack.pop(), 10);
             //console.log(t);
             if (t==="+") {
                stack.push(a+b);
             }
             else if (t==="-") {
                  stack.push(b-a);
             }
             else if (t==="*") {
                  stack.push(a*b);
             }
             else if (t==="/") {
                  stack.push(Math.floor(b/a));
             }
        }
    }
    res=stack.pop();
    return res;
};

console.log(evaluate(["2", "1", "+", "3", "*"]));
console.log(evaluate(["4", "13", "5", "/", "+"]));
