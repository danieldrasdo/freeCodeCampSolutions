function smallestCommons(arr) {
  var newArr = [];
  arr.sort();

  for (var i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  var largestMultiple = newArr[newArr.length-1];

  while ( !module(newArr,largestMultiple) ) {
    largestMultiple += newArr[newArr.length-1];
  }

  function module(a,n){
    for(var j = 0; j < a.length-1; j++) {
      if (n % a[j] !== 0) {
        return false;
      }
    }
    return true;
  }

  return largestMultiple;
}

smallestCommons([1,5]);
