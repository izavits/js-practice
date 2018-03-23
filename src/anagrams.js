/*
Given an array of strings, return all groups of strings that are anagrams.
*/

var anagrams=function anagrams(strs) {
    var res=[];
    var map={};
    if (strs===null || strs.length===0) {
       return res;
    }
    for (var i=0; i<strs.length; i++) {
        var str=strs[i].split('');
        str.sort();
        var strrepr=str.join('');
        if (!map.hasOwnProperty(strrepr)) {
           map[strrepr]=[i];
        }
        else {
             map[strrepr].push(i);
        }
    }
    for (var i in map) {
        if (map[i].length>1) {
           var temp=[];
           for (var j=0; j<map[i].length; j++) {
               temp.push(strs[map[i][j]]);
           }
           res.push(temp);
        }
    }
    return res;
};

console.log(anagrams(['anna', 'car', 'nnaa', 'rac', 'boy']));
console.log(anagrams(['test', 'car', 'boy']));
console.log(anagrams(['test', 'estt', 'boy', 'bye', 'yob', 'stte']));
