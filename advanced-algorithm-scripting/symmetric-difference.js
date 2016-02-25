function sym(args) {

  function arrDiff(arr1, arr2) {
    function unique(arr) {
      var seen = {};
      return arr.filter(function(item) {
        item = Number(item);//Not sure if this is neccessary, but just in case item is a string or something.
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
    }

    var obj = {},
        difference = [];

    arr1 = unique(arr1);
    arr2 = unique(arr2);

    for (var i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = true;
    }
    for (var j = 0; j < arr2.length; j++) {
      if (obj[arr2[j]] === true) {
        delete obj[arr2[j]];
      } else {
        obj[arr2[j]] = true;
      }
    }
    for (var key in obj) {
      difference.push(Number(key));
    }
    return difference;
  }

  var arrayOfArgs = [],
      result = [];



  for (var i = 0; i < arguments.length; i++) {
    arrayOfArgs.push(arguments[i]);
  }

  result = arrDiff(arrayOfArgs[0], arrayOfArgs[1]);

  if (arrayOfArgs.length !== 2) {
    for (var j = 2; j <= (arrayOfArgs.length - 1); j++) {
      result = arrDiff(result, arrayOfArgs[j]);
    }
  }

  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
