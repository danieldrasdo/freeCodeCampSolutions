function slasher(arr, howMany) {
  if (howMany < 1) {
    return arr;
  } else {
    return arr.splice(howMany, arr.length);
  }
}

slasher([1, 2, 3], 2);
