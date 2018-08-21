function sumAll(arr) {
  let n = 0;
  let sum = 0;
  let total; 
  if (arr[0] > arr[1] ){
        n = arr[0] - arr[1];
      for(var i = 1; i<n;i++){
        sum += arr[0]-i; 
  }
  
}
else{
   n = arr[1] - arr[0];
   for (var j = 1; j<n;j++){
     sum += arr[1]-j;
   }
  
}
total = sum + arr[0] +arr[1];
  return total;
}

sumAll([1, 5]);

/*function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);*/ 