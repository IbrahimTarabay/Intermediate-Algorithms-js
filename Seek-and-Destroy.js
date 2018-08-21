function destroyer(arr,...forDeletion) {
  
 return arr.filter(item => !forDeletion.includes(item))
 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*// array-lib.js

export function remove(...forDeletion) {
    return this.filter(item => !forDeletion.includes(item))
}

// main.js

import { remove } from './array-lib.js'

let arr = [1, 2, 3, 4, 5, 3]

// :: This-Binding Syntax Proposal
// using "remove" function as "virtual method"
// without extending Array.prototype
arr = arr::remove(2, 3, 5)

console.log(arr)
// [ 1, 4 ]*/
