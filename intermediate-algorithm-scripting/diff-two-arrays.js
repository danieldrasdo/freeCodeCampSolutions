
function diff(arr1, arr2) {
  var newArr = [];

  //console.log(arr1.indexOf(arr2[3]));
  function compare(value){
    console.log(value);
    return arr2.indexOf(value)==-1;
  }
    function compare1(value){
    console.log(value);
    return arr1.indexOf(value)==-1;
  }
  // Same, same; but different.
  var filtered=arr1.filter(compare);
  var filtered1=arr2.filter(compare1);
  console.log(filtered);
  console.log(filtered1);
  console.log();
  return filtered.concat(filtered1);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
