function where(arr, num) {
  arr.sort( function(a,b){
    return a - b;
  });

  var indexNumber = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      indexNumber = i+1;
    }
  }

  return indexNumber;
}

where([40, 60], 50);
