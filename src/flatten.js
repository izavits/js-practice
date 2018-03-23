var flatten=function flatten(arg) {
  var res=[];
  if (!Array.isArray(arg)) {
    res.push(arg);
    return res;
  }
  for (var i=0; i<arg.length; i++) {
    if (Array.isArray(arg[i])) {
      res=res.concat(flatten(arg[i]));
    }
    else {
      res.push(arg[i]);
    }
  }
  return res;
};

module.exports=flatten;
