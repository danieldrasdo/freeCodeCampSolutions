function repeat(str, num) {
  if (num === 0) {
    return str;
  } else if (num > 0) {
    var repeatedStr ='';
    for (var i = 0; i < num; i++) {
      repeatedStr += str;
    }
    return repeatedStr;
  } else {
    return '';
  }
}

repeat('abc', 3);
