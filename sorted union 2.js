function uniteUnique(arr) {
  
  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);
  
  // create a Set
  return [...new Set(args)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function uniteUnique(...arr) {
  return arr.reduce((a, c)=>a.concat(c.filter(v => a.indexOf(v) == -1)),[]);
}