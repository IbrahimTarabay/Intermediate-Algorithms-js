function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]);
     i++;
     //console.log(concatArr);
  }
  var uniqueArray = concatArr.filter(function(item, pos) {

    //console.log(item);
    //console.log(pos);

     if(concatArr.indexOf(item) == pos){
       return item;
     };
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);