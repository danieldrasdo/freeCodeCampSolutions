function where(collection, source) {

  var sourceKeys = Object.keys(source);

  //Loop through the collection
  for (var i = 0; i < collection.length; i++) {

    var currentObject = collection[i];

    //Loop through all the sources keys
    for (var j = 0; j < sourceKeys.length; j++) {
      var currentKey = sourceKeys[j];

      if ( !currentObject.hasOwnProperty(currentKey) || currentObject[currentKey] !== source[currentKey] ) {
        collection.splice(i, 1);
        i--;
      }
    }
  }
  return collection;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
