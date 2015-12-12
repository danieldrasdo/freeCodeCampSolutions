function sumPrimes(num) {
  var arr = [2,3];
  var result = 0;

  for (var i = 2; i <= num; i++) {
    if (prime(i)) {
      result += i;
    }
  }

  function prime(x){
    for (var j = 2; j < x; j++) {
      if (x%j === 0) {
        return false;
      }
    }
    return true;
  }
  return result;
}

sumPrimes(10);
