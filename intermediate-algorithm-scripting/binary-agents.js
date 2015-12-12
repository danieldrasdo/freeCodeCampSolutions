function binaryAgent(str) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = binaryToWords(str[i]);
  }
  str = str.join('');

  function binaryToWords(a) {
    if(a.match(/[10]{8}/g)){
      var wordFromBinary = a.match(/([10]{8}|\s+)/g).map(function(fromBinary){
        return String.fromCharCode(parseInt(fromBinary, 2) );
      }).join('');
      return wordFromBinary;
    }
  }

  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
