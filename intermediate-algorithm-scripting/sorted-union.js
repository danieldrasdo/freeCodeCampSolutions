function unite(arr1, arr2, arr3) {
  var arrays = [];
  for (var i = 0; i < arguments.length; i++) {
    arrays = arrays.concat(arguments[i]);
  }
  return arrays.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
