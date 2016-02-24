function inventory(arr1, arr2) {

  //Created a method to get an object's length
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  function invArrToObj(inv) {
    //{item: total, item2: total, ...etc }
    var obj = {};
    for (var i = 0; i < inv.length; i++) {
      var key = inv[i][1],
          value = inv[i][0];
      obj[key] = value;
    }
    return obj;
  }

  var curInvObj = invArrToObj(arr1),
      newInvObj = invArrToObj(arr2);

  //Adds all unique new inventory items into the current inventory. Any items already existing in the current inventory get skipped.
  var combinedInv = Object.assign({}, newInvObj, curInvObj);
  var combinedInvLength = Object.size(combinedInv);

  //An alphabetically sorted array of all the items(keys) in the combinedInv object
  var inventoryItems = Object.keys(combinedInv).sort();

  //The array I will return once I've concatenated and sorted all inventory items.
  var concatenatedSortedInvArr = [];



  //Add up item totals
  for (var i = 0; i < combinedInvLength; i++) {
    var item = inventoryItems[i],
        combinedInventoryItemTotal = combinedInv[item],
        newInventoryItemTotal = newInvObj[item];

    if (item in newInvObj) {
      //Add together non-unique item totals
      if (combinedInventoryItemTotal !== newInventoryItemTotal) {
        combinedInv[item] += newInventoryItemTotal;
      }
    }

    concatenatedSortedInvArr.push([combinedInv[item], item]);
  }

  return concatenatedSortedInvArr;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

inventory(curInv, newInv);
