function friendly(str) {
  var splitDates = [str[0].split('-') , str[1].split('-')];
  var startDateTimestamp = dateToTimestamp(str[0]);
  var endDateTimestamp = dateToTimestamp(str[1]);
  var startMonth = monthToString(trimZeros(splitDates[0][1])) + " ";
  var startDay = dayToString(trimZeros(splitDates[0][2]));
  var startYear = ', '+splitDates[0][0];
  var endMonth = monthToString(trimZeros(splitDates[1][1])) + " ";
  var endDay = dayToString(trimZeros(splitDates[1][2]));
  var endYear = ', '+splitDates[1][0];
  var currentYear = new Date().getFullYear();
  var resultingArray = [];

  function monthToString(value) {
    value = value.toString();
    var monthLookup = {
      '1': 'January',
      '2': 'February',
      '3': 'March',
      '4': 'April',
      '5': 'May',
      '6': 'June',
      '7': 'July',
      '8': 'August',
      '9': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    };
    return monthLookup[value];
  }

  function dayToString(value) {
    value = value.toString();
    switch (value) {
      case '1':
      case '21':
      case '31':
        return value + 'st';
      case '2':
      case '22':
        return value + 'nd';
      case '3':
      case '23':
        return value + 'rd';
      default:
        return value + 'th';
    }
  }

  function trimZeros(string) {
    string = string.toString();
    if ( string.substr(0,1) === '0') {
      string = string.substr(1);
    }
    return string;
  }

  function dateToTimestamp(str) {
    var dateArray = str.split('-');
    var result = new Date((Date.UTC(dateArray[0], dateArray[1] - 1, dateArray[2]))/1000).getTime();
    return result;
  }

  //logic
  if (startDateTimestamp == endDateTimestamp) {
    resultingArray = [startMonth+startDay+endYear];
  } else if (startYear == endYear && startMonth != endMonth) {
    resultingArray = [startMonth+startDay, endMonth+endDay];
  } else if (startYear == endYear && startMonth == endMonth) {
    resultingArray = [startMonth+startDay, endDay];
  } else if (splitDates[0][0] == currentYear && Math.abs(startDateTimestamp - endDateTimestamp) < (86400*365) ) {
    resultingArray = [startMonth+startDay, endMonth+endDay];
  } else {
    resultingArray =  [startMonth+startDay+startYear,endMonth+endDay+endYear];
  }

  return resultingArray;
}

//friendly(['2016-07-01', '2016-07-04']);//["July 1st","4th"]
//friendly(['2016-12-01', '2017-02-03']);//["December 1st","February 3rd"]
//friendly(['2016-12-01', '2018-02-03']);//["December 1st, 2016","February 3rd, 2018"]
friendly(['2017-03-01', '2017-05-05']);//["March 1st","May 5th"]
//friendly(['2018-01-01', '2018-01-01']);//["January 1st, 2018"]
//friendly(['2022-09-05', '2023-09-04']);//["September 5th, 2022","September 4th, 2023"]
