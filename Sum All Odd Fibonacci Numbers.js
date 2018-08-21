function sumFibs(num) {
   var sum = 0;
   var arr = [0,1];
   var len;

    if(num <= 0){
       return 0;
    }

   for(var i = 0; num >= (arr[i] + arr[i+1]); i++){
      
       arr.push(arr[i]+arr[i+1]);

     if(arr[i] % 2 != 0){
               
      sum = sum + arr[i];
      //console.log(sum);

    }
   }
    
    len = arr.length - 1;
   
   if (arr[len] % 2 !=0){
     sum = sum + arr[len];
   }
   if(arr[len - 1] % 2 !=0){
     sum = sum + arr[len -1];
   }
   
   console.log(arr);
    return sum;

}

sumFibs(55);



/*      sum = arr.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });*/




