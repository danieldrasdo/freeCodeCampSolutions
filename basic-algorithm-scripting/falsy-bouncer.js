function bouncer(arr) {
  function remove(x){
    return Boolean(x);
  }
  var filteredArray = arr.filter(remove);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
