function steamroller(arr) {
  Array.prototype.flatten = function() {
    return this.reduce(function(prev, cur) {
      var more = [].concat(cur).some(Array.isArray);
      return prev.concat(more ? cur.flatten() : cur);
    },[]);
  };
  return arr.flatten();
}

steamroller([1, [2], [3, [[4]]]]);
