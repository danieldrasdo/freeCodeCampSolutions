function find(arr, func) {

  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
