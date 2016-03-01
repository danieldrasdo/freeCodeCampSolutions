function telephoneCheck(str) {
  var phoneRegex = /^(1[-. ]?)?(\([2-9]\d{2}\)[-. ]?|[2-9]\d{2}[-. ]?)[2-9]\d{2}[-. ]?\d{4}$/gm;
  return phoneRegex.test(str);
}

telephoneCheck("1 555-555-5555");
