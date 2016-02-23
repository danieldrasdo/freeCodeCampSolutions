function drawer(price, cash, cid) {

  var changeAmount = toDecimals(cash - price, 2);
  var cidAmount = toDecimals(cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1], 2);
  var balance = toDecimals(cidAmount - changeAmount, 2);
  var divisors = [
    [0.01, "PENNY"],
    [0.05, "NICKEL"],
    [0.1, "DIME"],
    [0.25, "QUARTER"],
    [1, "ONE"],
    [5, "FIVE"],
    [10, "TEN"],
    [20, "TWENTY"],
    [100, "ONE HUNDRED"]
  ];
  var changeArray = [];

  function toDecimals(number,places) { return Number(number).toFixed(places); }

  function findBillsAndCoins(indices) {
    cid[indices].push(toDecimals(cid[indices][1] / divisors[indices][0], 0));

    if (changeAmount - divisors[indices][0] > 0) {
      var denominationNeeded = Math.floor(changeAmount / divisors[indices][0]);
      if (cid[indices][2] > 0) {
        if (cid[indices][2] >= denominationNeeded) {
          changeArray.push([divisors[indices][1], denominationNeeded * divisors[indices][0]]);
          changeAmount -= (denominationNeeded * divisors[indices][0]);
        } else {
          changeArray.push([divisors[indices][1], cid[indices][2] * divisors[indices][0]]);
          changeAmount -= (cid[indices][2] * divisors[indices][0]);
        }
      }
    }
    changeAmount = toDecimals(changeAmount, 2);
  }

  if (balance < 0) {
    return "Insufficient Funds";
  } else if (balance === "0.00") {
    return "Closed";
  } else {

    for (var i = 8; i >= 0; i--) {
      findBillsAndCoins(i);
    }

    if (changeAmount > 0) {
      return "Insufficient Funds";
    }
  }

  // Here is your change, ma'am.
  return changeArray;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
