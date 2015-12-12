function sumFibs(num) {
  var a = 1;
  var b = 1;
  var result = 0;
  var fibArr = [];

  for (var i = 1; result <= num; i++) {
    switch (i) {
      case 1:
        fibArr.push(a);
        break;
      case 2:
        fibArr.push(b);
        break;
      default:
        result = a + b;
        if (result % 2 !== 0 && result <= num) {
          fibArr.push(result);
        }
        a = b;
        b = result;
        break;
    }
  }
  var sum = fibArr.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

sumFibs(4);
