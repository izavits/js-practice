/**
  Test if two given strings are isomorphic.
  Two strings are isomorphic if the characters in string1 can be replaced to get string2.
*/

var test=function test(s1,s2){
    var corr={};
    if (s1.length!==s2.length){
        return false;
    }
    for (var i=0;i<s1.length;i+=1){
        var char=s1[i];
        var char2=s2[i];
        if (!((char===undefined) || (char2===undefined))){
            if (corr[char]===undefined){
                corr[char]=char2;
            } else {
                if (corr[char]!==char2){
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(test('foo','bar'));
console.log(test('foo','brr'));
console.log(test('egg','add'));
