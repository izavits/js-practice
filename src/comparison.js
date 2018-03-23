/**
 Function that takes a member name string
 and returns a comparison function that can be used
 to sort an array of objects that contain that member.
 It also takes (optionally) a second parameter: the minor comparison function
 which is used to break ties when the o[name] and p[name] are equal.
*/

var by=function by(name, minor) {
    return function(o, p) {
           var a, b;
           if (typeof o === 'object' && typeof p==='object' && o && p) {
              a=o[name];
              b=p[name];
              if (a===b) {
                 //return 0;
                 return typeof minor==='function' ? minor(o,p) : 0;
              }
              if (typeof a === typeof b) {
                 return a<b ? -1 : 1;
              }
              return typeof a < typeof b ? -1 : 1;
           }
           else {
                throw {
                      name: 'Error',
                      message: 'Expected an object when sorting by '+name
                };
           }
    };
};

// Test
var s=[
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
    ];

console.log("Initial array:");
console.log(s);

s.sort(by('first', by('last')));
console.log("Sorted by first name:");
console.log(s);

s.sort(by('last'));
console.log("Sorted by last name:");
console.log(s);
