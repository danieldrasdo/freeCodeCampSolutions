function chunk(arr, size) {
  var tempArray = [];
  var i = 0;
  while (i < arr.length) {
    tempArray.push(arr.slice(i,i+= size));
  }
  return tempArray;
}

chunk(['a', 'b', 'c', 'd'], 2);
