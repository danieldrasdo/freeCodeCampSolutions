function drawer(price, cash, cid) {

  var changeAmount = toDecimals(cash - price,2);
  var cidAmount = toDecimals(cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1],2);
  var balance = toDecimals(cidAmount - changeAmount,2);
  var changeArray = [];

  function toDecimals(number,places) {
    return Number(number).toFixed(places);
  }

  function findBillsAndCoins(divisor, indices, denomination) {
    if (changeAmount - divisor > 0) {
      var denominationNeeded = Math.floor(changeAmount / divisor);
      if (cid[indices][2] > 0) {
        if (cid[indices][2] >= denominationNeeded) {
          changeArray.push([denomination, denominationNeeded * divisor]);
          changeAmount -= (denominationNeeded * divisor);
        } else {
          changeArray.push([denomination, cid[indices][2] * divisor]);
          changeAmount -= (cid[indices][2] * divisor);
        }
      }
    }
    changeAmount = toDecimals(changeAmount, 2);
  }

  cid[0].push(toDecimals(cid[0][1] / 0.01, 0));
  cid[1].push(toDecimals(cid[1][1] / 0.05,0));
  cid[2].push(toDecimals(cid[2][1] / 0.1,0));
  cid[3].push(toDecimals(cid[3][1] / 0.25,0));
  cid[4].push(toDecimals(cid[4][1] / 1,0));
  cid[5].push(toDecimals(cid[5][1] / 5,0));
  cid[6].push(toDecimals(cid[6][1] / 10,0));
  cid[7].push(toDecimals(cid[7][1] / 20,0));
  cid[8].push(toDecimals(cid[8][1] / 100,0));

  if (balance < 0) {
    return "Insufficient Funds";
  } else if (balance === "0.00") {
    return "Closed";
  } else {

    findBillsAndCoins(100, 8, "ONE HUNDRED");
    findBillsAndCoins(20, 7, "TWENTY");
    findBillsAndCoins(10, 6, "TEN");
    findBillsAndCoins(5, 5, "FIVE");
    findBillsAndCoins(1, 4, "ONE");
    findBillsAndCoins(0.25, 3, "QUARTER");
    findBillsAndCoins(0.1, 2, "DIME");
    findBillsAndCoins(0.05, 1, "NICKEL");
    findBillsAndCoins(0.01, 0, "PENNY");

    if (changeAmount > 0) {
      return "Insufficient Funds";
    }
  }
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
