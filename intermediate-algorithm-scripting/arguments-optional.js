function add() {
  var sum = 0;

  if (arguments.length === 1) {
    var firstArg = arguments[0];
    //Check if the one argument is an integer
    if (Number.isInteger(firstArg)) {
      return function(a) {
        if (Number.isInteger(a)) {
          return a += firstArg;
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  } else if (arguments.length === 2) {
    for (var i = 0; i < 2; i++) {
      if (Number.isInteger(arguments[i])) {
        sum += arguments[i];
        console.log('sum: '+sum);
      } else {
        return undefined;
      }
    }
    return sum;
  } else if (arguments.length > 2 || arguments.length <= 0) {
    return undefined;
  }
  return undefined;
}

add(2,3);
