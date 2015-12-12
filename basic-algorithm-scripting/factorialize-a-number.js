function factorialize(num) {
  var factorial = 1;
  for (num; num > 1; num--) {
    factorial *= num;
  }
  return factorial;
}

factorialize(5);
