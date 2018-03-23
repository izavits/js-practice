var add=function add(a,b) {
    if (typeof a!=='number' || typeof b!=='number') {
       throw {
             name:'TypeError',
             message:'I need a number!'
       };
    }
    return a+b;
};

var tryit=function tryit() {
    try {
        console.log(add("test", 3));
    }
    catch(e) {
        console.log(e.name+": "+e.message);
    }
};

tryit();
