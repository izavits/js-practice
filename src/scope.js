/**
  Variable scope example.
*/

var Ctor = function() {
    this.foo = 'foo';
    this.bar = 3;

    this.fn = function(inputFn) {
		//var that=this;
        inputFn(function() {
            console.log(that.foo);
            console.log(that.bar);
        });
    };
};

var obj = new Ctor();

obj.fn(function (fn) {
    fn();
});
