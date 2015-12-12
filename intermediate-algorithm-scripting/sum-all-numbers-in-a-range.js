function sumAll(arr) {
  if (arr[0]>arr[1]){
    var temp=arr[0];
    arr[0]=arr[1];
    arr[1]=temp;
  }
  var sum=0;
  for(var i = arr[0];i<=arr[1];i++)
    sum+=i;

  return sum;
}

sumAll([5, 10]);
