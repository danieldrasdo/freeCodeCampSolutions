function palindrome(str) {
  var stripped = str.toLowerCase().replace(/\W|_/g, '');
  var reversed = stripped.split('').reverse().join('');
  return stripped === reversed;
}

palindrome("eye");
