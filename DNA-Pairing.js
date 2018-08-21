/*function pairElement(str) {
  let arr = [...str];
  let newarr1 = [];
  let newarr2 = [];
  let len = arr.length;

   for(let i = 0; i < len; i++){
      if (arr[i] == 'A'){
          newarr2 = [];
          newarr2.push('A');
          newarr2.push('T');
          newarr1.push(newarr2);
      }
      else if(arr[i] == 'T'){
          newarr2 = [];
          newarr2.push('T');
          newarr2.push('A');
          newarr1.push(newarr2);

      }
      else if (arr[i] == 'C'){
          newarr2 = [];
          newarr2.push('C');
          newarr2.push('G');
          newarr1.push(newarr2);

      }
      else if(arr[i] == 'G'){
          newarr2 = [];
          newarr2.push('G');
          newarr2.push('C');
          newarr1.push(newarr2);

      }

   }

   return newarr1;

}

pairElement("GCG");*/

/*function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");*/ 
function pairElement(str) {
  
  return str.split("").map(function (el) {
    if (el === "A") {
      return ["A", "T"];
    } else  if (el === "T") {
      return ["T", "A"];
    } else if (el === "C") {
      return ["C", "G"];
    } else {
      return ["G", "C"];
    }
  });
}
pairElement('GCG');