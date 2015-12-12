function drop(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      return arr.slice(i,arr.length);
    }
  }
  return [];
}

drop([1, 2, 3], function(n) {return n < 3; });
