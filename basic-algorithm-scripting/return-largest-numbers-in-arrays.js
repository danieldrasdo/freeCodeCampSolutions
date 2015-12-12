function largestOfFour(arr) {
  var arrOfFour = [0,0,0,0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arrOfFour[i] < arr[i][j]) {
        arrOfFour[i] = arr[i][j];
      }
    }
  }
  return arrOfFour;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
