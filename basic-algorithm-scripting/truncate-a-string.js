function truncate(str, num) {
  if (str.length >= num+3) {
    var x = str.slice(0,num);
    var result = x.slice(0,-3);
    result += '...';
    return result;
  } else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
