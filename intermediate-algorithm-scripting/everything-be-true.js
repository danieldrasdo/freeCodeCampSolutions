function every(collection, pre) {
  //if pre is a string...
  if (typeof pre === 'string' || pre instanceof String) {

    //loop through each collection index and check if it has pre as a property/key
    for (var i = 0; i < collection.length; i++) {

      //if you come across one that doesn't, return false, you're done.
      if (!collection[i].hasOwnProperty(pre)) {
        return false;
      }
    }
  }

  //But if pre is an object...
  else if (pre !== null && typeof pre === 'object') {

    var preKeys = [];
    var preValues = [];

    //get pre's keys...
    preKeys = Object.getOwnPropertyNames(pre);

    //...and pre's values (matching array)
    for (var i = 0; i < preKeys.length; i++) {
      preValues.push(pre[preKeys[i]]);
    }

    //loop through each collection index
    for (var i = 0; i < collection.length; i++) {

      //check if the collection index has pre properties/keys, and pre's values, if you come across one that doesn't, return false, you're done.
      if (!collection[i].hasOwnProperty(preKeys[i]) || collection[i][preKeys[i]] !== preValues[i]) {
        return false;
      }
    }
  }

  //return true;
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
