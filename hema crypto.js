function ceaser(str,rot){  

  if(rot > 25 || rot < 0){
      
      return "not possible";

  }

  let upper = str.toUpperCase();

 return upper.replace(/[A-Z]/g, L => {
   
   if(L.charCodeAt(0) + rot > 90){
      
       return String.fromCharCode(L.charCodeAt(0)-25 + rot-1);
    
  }else{
     
      return String.fromCharCode(L.charCodeAt(0) + rot);
   }


   /*if((L.charCodeAt(0) - rot) < 65){//decrypt
      
       return String.fromCharCode(L.charCodeAt(0)+25 - rot+1);
    
  }else{
     
      return String.fromCharCode(L.charCodeAt(0) - rot);
   }*/
  
});

}
  
  ceaser("hema love football",1);