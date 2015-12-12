function destroyer(arr) {
  var elementsToDestroy = [];
  for(var i = 1; i < arguments.length; i++){
    elementsToDestroy.push(arguments[i]);
  }

  var survivor = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < elementsToDestroy.length; i++){
      if (element === elementsToDestroy[i]){
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survivor;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
