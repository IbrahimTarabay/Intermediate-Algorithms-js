function diffArray(arr1, arr2) {
  
  
 let newArr = [];

 let len1 = arr1.length;
 let len2 = arr2.length;
 let arr11 = arr1.slice(0,len1);

 

arr1 = arr1.filter(item => !arr2.includes(item));

  
arr2 = arr2.filter(item => !arr11.includes(item));


  console.log(arr1); 
  console.log(arr2);

  for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
  }
 
   for (let i = 0; i < arr2.length; i++){
        newArr.push(arr2[i]);
  }
  
  return newArr;
  
  }

   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  

  
  /*var newArr = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  
  
   for (let i = 0; i < len1; i++){
      for(let j = 0; j < len2;j++){
        if (arr1[i]===arr2[j]){
               arr1.splice(i,1);
               arr2.splice(j,1);
              console.log(arr1);
              console.log(arr2);
             
             
        }
      }
   }
   for (let i = 0; i < len1; i++){
      for(let j = 0; j < len2;j++){
        if (arr1[i]===arr2[j]){
               arr1.splice(i,1);
               arr2.splice(j,1);
              console.log(arr1);
              console.log(arr2);
             
             
        }
      }
   }
   newArr.push(arr1);
   newArr.push(arr2);
   console.log(newArr);
   let value = [];

  newArr = newArr.filter(item => item !== value);
    
  console.log(newArr);
 /*  console.log(arr1);
   console.log(arr2);*/
/*var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}*/



