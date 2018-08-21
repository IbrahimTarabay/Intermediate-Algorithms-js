function translatePigLatin(str) {
let arr = [...str];
let newarr = [];
let len = arr.length;

for(let i = 0; i < len; i++){
 
  if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "u" || arr[i] == "o" ){
         if (i == 0){
            newarr = arr.slice(i);
            newarr.push("w");
            newarr.push("a");
            newarr.push("y");
            i = len;
           
         }
         else{     
              newarr = arr.slice(i);
              for(let j = 0; j < i; j++){
                  newarr.push(arr[j]);
              }
              newarr.push("a");
              newarr.push("y");
              i = len;
         }
  }
  else{
    newarr = arr.slice(0);
    newarr.push("a");
    newarr.push("y");
  }
}

 return newarr.join('');

}

translatePigLatin("klj");

/*function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
    
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");*/