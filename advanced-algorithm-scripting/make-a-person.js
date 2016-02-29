var Person = function(firstAndLast) {
  var first = first || firstAndLast.split(' ')[0],
      last = last || firstAndLast.split(' ')[1];

  this.getFirstName = function() {return first;};
  this.getLastName = function() {return last;};
  this.getFullName = function() {return first + ' ' + last;};
  this.setFirstName = function(string) {first = string; return first;};
  this.setLastName = function(string) {last = string; return last;};
  this.setFullName = function(string) {
    first = string.split(' ')[0];
    last = string.split(' ')[1];
  };

  return first + ' ' + last;
};

var bob = new Person('Bob Ross');
bob.getFullName();
