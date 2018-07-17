function frankenSplice(arr1, arr2, n) {
  var resultingArray = arr2.slice(0, arr2.length);
  for (var i = 0; i < arr1.length; i++) {
    var insert = arr1.slice(i);
    resultingArray.splice((n + i), 0, insert[0]);
  }
  return resultingArray;
}