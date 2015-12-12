function end(str, target) {
  var targetLength = target.length;
  return str.substr(-targetLength) === target;
}

end('Bastian', 'n');
