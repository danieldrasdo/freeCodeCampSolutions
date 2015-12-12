/*
//This is what I had first, I find it funny...
function convert(num) {
	if (num >= 4000) {
		return false;
	}

	function firstDigit(num) {
		switch(num) {
			case '1':	return 'i';
				break;
			case '2': return 'ii';
				break;
			case '3': return 'iii';
				break;
			case '4': return 'iv';
				break;
			case '5': return 'v';
				break;
			case '6': return 'vi';
				break;
			case '7': return 'vii';
				break;
			case '8': return 'viii';
				break;
			case '9': return 'ix';
				break;
			default: return '';
				break;
		}
	}
	function secondDigit(num) {
		switch(num) {
			case '1':	return 'x';
				break;
			case '2': return 'xx';
				break;
			case '3': return 'xxx';
				break;
			case '4': return 'xl';
				break;
			case '5': return 'l';
				break;
			case '6': return 'lx';
				break;
			case '7': return 'lxx';
				break;
			case '8': return 'lxxx';
				break;
			case '9': return 'xc';
				break;
			default: return '';
				break;
		}
	}
	function thirdDigit(num) {
		switch(num) {
			case '1':	return 'c';
				break;
			case '2': return 'cc';
				break;
			case '3': return 'ccc';
				break;
			case '4': return 'cd';
				break;
			case '5': return 'd';
				break;
			case '6': return 'dc';
				break;
			case '7': return 'dcc';
				break;
			case '8': return 'dccc';
				break;
			case '9': return 'cm';
				break;
			default: return '';
				break;
		}
	}
	function fourthDigit(num) {
		switch(num) {
			case '1':	return 'm';
				break;
			case '2': return 'mm';
				break;
			case '3': return 'mmm';
				break;
			//not excepting numbers over 4,000
			default: return '';
				break;
		}
	}

	var digits = num.toString().split('');
	var romanNum = [];

	if (digits.length >= 4) {
		console.log(digits[0]);
		console.log(digits[1]);
		console.log(digits[2]);
		console.log(digits[3]);
		romanNum.push(fourthDigit(digits[0]));
		romanNum.push(thirdDigit(digits[1]));
		romanNum.push(secondDigit(digits[2]));
		romanNum.push(firstDigit(digits[3]));
		console.log(romanNum);
	} else if (digits.length == 3) {
		console.log(digits[0]);
		console.log(digits[1]);
		console.log(digits[2]);
		romanNum.push(thirdDigit(digits[0]));
		romanNum.push(secondDigit(digits[1]));
		romanNum.push(firstDigit(digits[2]));
		console.log(romanNum);
	} else if (digits.length == 2) {
		console.log(digits[0]);
		console.log(digits[1]);
		romanNum.push(secondDigit(digits[0]));
		romanNum.push(firstDigit(digits[1]));
		console.log(romanNum);
	} else if (digits.length == 1) {
		console.log(digits[0]);
		romanNum.push(firstDigit(digits[0]));
		console.log(romanNum);
	} else {return false;}

	return romanNum.join('').toUpperCase();
}

convert(36);
*/

function convert(num) {
  var ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  var result = '';
  ref.forEach(function(p) {
    while (num >= p[1]) {
      result += p[0];
      num -= p[1];
    }
  });
  return result;
}

convert(36);
