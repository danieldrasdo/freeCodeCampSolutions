function fearNotLetter(str) {
  var result = [];
  for (var i = str.charCodeAt(); i <= str.charCodeAt(str.length-1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) == -1) {
      result.push(String.fromCharCode(i));
    }
  }
  return result[0];//remove the [0] if you want to return an array of all the missing letters, ie: if fearNotLetter('abcefgijklnopqr') was called.
}

fearNotLetter('abce');
