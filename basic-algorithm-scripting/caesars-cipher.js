function rot13(str) { // LBH QVQ VG!

  var arr = str.split("");

  for (var i = 0; i < arr.length; i++) {

    if ( arr[i].match(/[A-Z]/) ) {
      var temp = arr[i].charCodeAt(0) - 13;

      if (temp < 65) {
        temp += 26;
      }
      arr[i] = String.fromCharCode(temp);

    }

  }
  return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
