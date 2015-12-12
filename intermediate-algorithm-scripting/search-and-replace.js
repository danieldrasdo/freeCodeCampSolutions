function replace(str, before, after) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (str[i] == before) {
      str[i] = str[i].split('');
      if (str[i][0] !== str[i][0].toLowerCase()) {
        after = after.split('');
        after[0] = after[0].toUpperCase();
        after = after.join('');
      }
      str[i] = str[i].join('');
      str[i] = after;
    }
  }
  return str.join(' ');
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
