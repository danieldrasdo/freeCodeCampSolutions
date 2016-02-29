function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for(var i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = calc(arr[i].avgAlt);
    delete arr[i].avgAlt;
  }

  function calc(x) {
    x += earthRadius;
    x = Math.pow(x,3);
    x /= GM;
    x = Math.pow(x,0.5);
    x = 2 * Math.PI * x;
    return Math.round(x);
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
