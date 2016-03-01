function truncate(str, num) {
  var slicedStr = str.slice(0, num);

  if (num <= 3) {
    return slicedStr + '...';
  } else if (str.length >= num+3) {
    return slicedStr.slice(0, -3) + '...';
  } else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
