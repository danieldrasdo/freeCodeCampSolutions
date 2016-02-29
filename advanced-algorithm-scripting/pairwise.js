function pairwise(arr, arg) {
  var total = 0;

  for (var i = 0; i < arr.length-1; i++) {

    if (arr[i] !== -1) {

      for (var j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] === arg && arr[j] !== -1) {
          total += i+j;
          arr[j] = -1;
          j = arr.length;
        }

      }

    }

  }
  return total;
}

pairwise([1,4,2,3,0,5], 7);
