function findLongestWord(str) {
  var strSplit = str.split(' ');
  var final = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (final < strSplit[i].length) {
      final = strSplit[i].length;
    }
  }
  return final;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
