function telephoneCheck(str) {
  var phoneRegex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneRegex.test(str)) {
    console.log("It's a match");
    return true;
  } else {
    console.log("Invalid phone number");
    return false;
  }
}

telephoneCheck("1 555-555-5555");
