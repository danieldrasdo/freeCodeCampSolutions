function translate(str) {
  str = str.split('');
  var arr = [];
  var x = [];
  var vowels = ['a','e','i','o','u','y'];

  if (vowels.indexOf(str[0]) !== -1) {
    return (str.join('')+'way');
  }

  for (var i = 1; i < (str.length)-1; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      arr = str.slice(0,i);
      x = (str.slice(i,str.length)).concat(arr);
      x.push('ay');
      return x.join('');
    }
  }

}

translate("consonant");
